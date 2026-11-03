"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import Image from "next/image";

// Embedded authentic Shopify SVG definition for 100% offline & deployment reliability
const EMBEDDED_SHOPIFY_SVG = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.3675 10.9967C46.329 10.7167 46.0837 10.5618 45.881 10.5447C45.6786 10.5278 41.3965 10.2104 41.3965 10.2104C41.3965 10.2104 38.4226 7.25796 38.0962 6.93117C37.7696 6.60457 37.1317 6.70391 36.8841 6.77678C36.8477 6.78752 36.2344 6.97681 35.2199 7.29076C34.2264 4.43207 32.4732 1.80506 29.3888 1.80506C29.3036 1.80506 29.216 1.80851 29.1283 1.8135C28.2511 0.653414 27.1645 0.149414 26.2259 0.149414C19.0408 0.149414 15.6082 9.13147 14.5319 13.6959C11.7399 14.561 9.75654 15.176 9.5032 15.2556C7.94479 15.7445 7.8955 15.7936 7.69087 17.262C7.53687 18.3738 3.45923 49.9081 3.45923 49.9081L35.2331 55.8614L52.4493 52.137C52.4493 52.137 46.4055 11.2767 46.3675 10.9967ZM33.4637 7.83388L30.7751 8.66602C30.7761 8.47654 30.7771 8.29013 30.7771 8.08626C30.7771 6.30961 30.5304 4.87911 30.1348 3.74511C31.7241 3.94457 32.7825 5.75287 33.4637 7.83388ZM28.1633 4.09741C28.6051 5.20457 28.8924 6.79347 28.8924 8.93758C28.8924 9.04728 28.8915 9.14758 28.8905 9.24903C27.1421 9.79062 25.2421 10.3786 23.3379 10.9685C24.4071 6.84218 26.4112 4.8492 28.1633 4.09741ZM26.0286 2.07662C26.3387 2.07662 26.6511 2.18191 26.9501 2.38769C24.6474 3.47125 22.1791 6.20029 21.1368 11.6501L16.7477 13.0095C17.9686 8.85262 20.8677 2.07662 26.0286 2.07662Z" fill="#95BF46"/>
<path d="M45.8812 10.5448C45.6789 10.5279 41.3968 10.2105 41.3968 10.2105C41.3968 10.2105 38.4228 7.25802 38.0964 6.93123C37.9743 6.80964 37.8095 6.74731 37.6373 6.72046L35.2349 55.861L52.4495 52.137C52.4495 52.137 46.4057 11.2768 46.3677 10.9968C46.3292 10.7168 46.0839 10.5618 45.8812 10.5448Z" fill="#5E8E3E"/>
<path d="M29.3889 20.0573L27.266 26.3719C27.266 26.3719 25.4061 25.3792 23.1263 25.3792C19.7839 25.3792 19.6157 27.4767 19.6157 28.0053C19.6157 30.8893 27.1335 31.9943 27.1335 38.7496C27.1335 44.0644 23.7626 47.4867 19.2174 47.4867C13.7631 47.4867 10.9739 44.0922 10.9739 44.0922L12.4343 39.267C12.4343 39.267 15.3014 41.7285 17.7207 41.7285C19.3016 41.7285 19.9446 40.4839 19.9446 39.5744C19.9446 35.8125 13.7769 35.6447 13.7769 29.463C13.7769 24.2602 17.5113 19.2253 25.0494 19.2253C27.954 19.2253 29.3889 20.0573 29.3889 20.0573Z" fill="white"/>
</svg>`;

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGLFallback, setHasWebGLFallback] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check WebGL availability
    function checkWebGL() {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    }

    if (!checkWebGL()) {
      setTimeout(() => setHasWebGLFallback(true), 0);
      return;
    }

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setTimeout(() => setHasWebGLFallback(true), 0);
      return;
    }

    function getWrapDimensions() {
      const w = container ? container.clientWidth : 0;
      const h = container ? container.clientHeight : 0;
      return {
        width: w > 50 ? w : 400,
        height: h > 50 ? h : 460,
      };
    }

    let { width, height } = getWrapDimensions();

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setSize(width, height);
    renderer.setPixelRatio(dpr);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);

    // Framing settings: Center the Shopify 3D model right inside the reserved center column
    function getResponsiveSettings() {
      const w = typeof window !== "undefined" ? window.innerWidth : 1440;
      if (w <= 479) {
        return { cameraZ: 132, cameraY: -2.0, logoY: -4.0, scale: 0.38 * 1.18 };
      } else if (w <= 767) {
        return { cameraZ: 122, cameraY: -2.0, logoY: -4.0, scale: 0.44 * 1.18 };
      } else if (w <= 991) {
        return { cameraZ: 114, cameraY: -2.0, logoY: -3.0, scale: 0.50 * 1.18 };
      } else {
        return { cameraZ: 106, cameraY: -2.0, logoY: -3.0, scale: 0.58 * 1.18 };
      }
    }

    let config = getResponsiveSettings();
    camera.position.set(0, 0, config.cameraZ);
    camera.lookAt(0, config.cameraY, 0);

    // Shopify Logo Group
    const logoGroup = new THREE.Group();
    const initialRotX = 0.04;
    const initialRotY = -0.28;
    logoGroup.position.set(0, config.logoY, 0);
    logoGroup.rotation.set(initialRotX, initialRotY, 0);
    scene.add(logoGroup);

    // Ambient and directional lighting for deep, non-shiny, matte volume with dark shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.15);
    dirLight.position.set(10, 45, 35);
    scene.add(dirLight);

    // Deep dark black contact ground shadow directly on podium plane
    let shadowMesh: THREE.Mesh | null = null;
    function createGroundShadow() {
      const shadowCanvas = document.createElement("canvas");
      shadowCanvas.width = 256;
      shadowCanvas.height = 256;
      const ctx = shadowCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 124);
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.98)");
        gradient.addColorStop(0.35, "rgba(0, 0, 0, 0.90)");
        gradient.addColorStop(0.65, "rgba(0, 0, 0, 0.60)");
        gradient.addColorStop(0.88, "rgba(0, 0, 0, 0.20)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);

        const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
        const shadowGeo = new THREE.PlaneGeometry(82 * config.scale, 82 * config.scale);
        const shadowMat = new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,
          depthWrite: false,
        });
        shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.set(0, config.logoY - 25 * config.scale, 0);
        scene.add(shadowMesh);
      }
    }
    createGroundShadow();

    // Physics & Interaction State
    let targetRotationY = initialRotY;
    let targetRotationX = initialRotX;
    let currentRotationY = initialRotY;
    let currentRotationX = initialRotX;
    let velocityY = 0;
    let velocityX = 0;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let lastInteractionTime = performance.now();

    // Parse and build true 3D extruded geometry
    const loader = new SVGLoader();
    const parsed = loader.parse(EMBEDDED_SHOPIFY_SVG);

    parsed.paths.forEach((p) => {
      const shapes = p.toShapes();
      const hex = p.color.getHexString().toLowerCase();

      shapes.forEach((shape) => {
        let extrudeDepth = 12.0;
        let bevelSize = 0.8;
        let bevelThickness = 0.9;

        // Natural Brand Colors - matte non-shiny MeshLambertMaterial with deep natural shadows
        let matFront: THREE.MeshLambertMaterial;
        let matSide: THREE.MeshLambertMaterial;

        if (hex === "5e8e3e") {
          // Authentic Dark Green side fold
          extrudeDepth = 12.2;
          bevelSize = 0.6;
          bevelThickness = 0.8;
          matFront = new THREE.MeshLambertMaterial({ color: 0x4a7330 });
          matSide = new THREE.MeshLambertMaterial({ color: 0x385724 });
        } else if (hex === "ffffff") {
          // Authentic Embossed White 'S' emblem
          extrudeDepth = 2.5;
          bevelSize = 0.35;
          bevelThickness = 0.45;
          matFront = new THREE.MeshLambertMaterial({ color: 0xffffff });
          matSide = new THREE.MeshLambertMaterial({ color: 0xe0e0e0 });
        } else {
          // Authentic Shopify Green main body (matte, non-neon, rich shadow contrast)
          matFront = new THREE.MeshLambertMaterial({ color: 0x82b536 });
          matSide = new THREE.MeshLambertMaterial({ color: 0x628a27 });
        }

        const geom = new THREE.ExtrudeGeometry(shape, {
          depth: extrudeDepth,
          bevelEnabled: true,
          bevelSegments: 4,
          steps: 1,
          bevelSize,
          bevelThickness,
        });
        geom.center();

        const mesh = new THREE.Mesh(geom, [matFront, matSide]);
        const s = config.scale;
        mesh.scale.set(s, -s, s);

        if (hex === "ffffff") {
          // Front S emblem
          mesh.position.set(0, 0, 7.0 * s);
          logoGroup.add(mesh);

          // Rear S emblem for 360-degree symmetry
          const backMesh = mesh.clone();
          backMesh.rotation.y = Math.PI;
          backMesh.position.set(0, 0, -7.0 * s);
          logoGroup.add(backMesh);
        } else if (hex === "5e8e3e") {
          mesh.position.set(0, 0, 0.1 * s);
          logoGroup.add(mesh);
        } else {
          mesh.position.set(0, 0, 0);
          logoGroup.add(mesh);
        }
      });
    });

    // Interaction Handlers
    function onPointerDown(e: PointerEvent) {
      if (!container || !canvas) return;
      if (e.button !== undefined && e.button !== 0) return;
      isDragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      velocityY = 0;
      velocityX = 0;
      lastInteractionTime = performance.now();
      container.style.cursor = "grabbing";

      if (e.pointerId !== undefined && canvas.setPointerCapture) {
        try {
          canvas.setPointerCapture(e.pointerId);
        } catch {
          // pointer capture fallback
        }
      }
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDragging) return;
      const deltaX = e.clientX - lastPointerX;
      const deltaY = e.clientY - lastPointerY;

      targetRotationY += deltaX * 0.009;
      const maxTilt = 0.44;
      targetRotationX = Math.max(-maxTilt, Math.min(maxTilt, targetRotationX + deltaY * 0.005));

      velocityY = deltaX * 0.008;
      velocityX = deltaY * 0.005;

      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastInteractionTime = performance.now();
    }

    function onPointerUp(e: PointerEvent) {
      if (!isDragging) return;
      isDragging = false;
      lastInteractionTime = performance.now();
      if (container) container.style.cursor = "grab";

      if (canvas && e.pointerId !== undefined && canvas.releasePointerCapture) {
        try {
          canvas.releasePointerCapture(e.pointerId);
        } catch {
          // release capture fallback
        }
      }
    }

    // Attach listeners
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    function onResize() {
      if (!container || !renderer) return;
      const dims = getWrapDimensions();
      width = dims.width;
      height = dims.height;
      config = getResponsiveSettings();

      camera.aspect = width / height;
      camera.position.z = config.cameraZ;
      camera.lookAt(0, config.cameraY, 0);
      camera.updateProjectionMatrix();

      logoGroup.position.y = config.logoY;
      if (shadowMesh) {
        shadowMesh.position.y = config.logoY - 25 * config.scale;
      }
      logoGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          const s = config.scale;
          const signX = child.scale.x < 0 ? -1 : 1;
          const signZ = child.scale.z < 0 ? -1 : 1;
          child.scale.set(signX * s, -s, signZ * s);
        }
      });

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    }

    window.addEventListener("resize", onResize);

    // Animation Loop with Inertia and Auto-Resume
    let animId: number;
    let lastTime = performance.now();

    function animate(now: number) {
      animId = requestAnimationFrame(animate);
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const idleDuration = (now - lastInteractionTime) / 1000;

      if (!isDragging) {
        if (idleDuration > 2.0) {
          // Auto-resume gentle idle rotation (Change 01)
          targetRotationY += 0.5 * delta;
          targetRotationX += (initialRotX - targetRotationX) * 1.5 * delta;
        } else {
          // Inertia damping after release
          targetRotationY += velocityY;
          targetRotationX = Math.max(-0.44, Math.min(0.44, targetRotationX + velocityX));
          velocityY *= 0.94;
          velocityX *= 0.94;
        }
      }

      // Smooth interpolation
      const smoothFactor = 1 - Math.exp(-12 * delta);
      currentRotationY += (targetRotationY - currentRotationY) * smoothFactor;
      currentRotationX += (targetRotationX - currentRotationX) * smoothFactor;

      logoGroup.rotation.y = currentRotationY;
      logoGroup.rotation.x = currentRotationX;

      renderer.render(scene, camera);
    }

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  if (hasWebGLFallback) {
    return (
      <div
        className="hero__3d-fallback"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Image
          src="/images/brand/shopify-hero-logo.png"
          alt="Shopify Partner"
          width={280}
          height={320}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="hero__3d-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "360px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",
        zIndex: 15,
        filter: "drop-shadow(0 28px 38px rgba(0, 0, 0, 0.95)) drop-shadow(0 12px 18px rgba(0, 0, 0, 0.9))",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
