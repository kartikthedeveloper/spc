"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const geo1 = new THREE.IcosahedronGeometry(2.1, 1);
    const mat1 = new THREE.MeshBasicMaterial({ color: "#D2AC55", wireframe: true, transparent: true, opacity: 0.55 });
    group.add(new THREE.Mesh(geo1, mat1));

    const geo2 = new THREE.IcosahedronGeometry(2.1, 0);
    const mat2 = new THREE.MeshBasicMaterial({ color: "#0E6B5C", wireframe: true, transparent: true, opacity: 0.25 });
    const mesh2 = new THREE.Mesh(geo2, mat2);
    mesh2.scale.setScalar(1.5);
    group.add(mesh2);

    scene.add(group);

    let frameId;
    const animate = () => {
      group.rotation.y += 0.0025;
      group.rotation.x += 0.0006;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    function handleResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geo1.dispose();
      mat1.dispose();
      geo2.dispose();
      mat2.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}