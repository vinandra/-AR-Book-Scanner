import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";

export default function Ar() {
  const containerRef = useRef(null);

  useEffect(() => {
    const startAR = async () => {
      console.log("Starting AR...");
      console.log("Container Reference:", containerRef.current);

      try {
        // Inisialisasi MindAR
        const mindarThree = new MindARThree({
          container: containerRef.current,
          imageTargetSrc: "/targets.mind", // File target AR
          uiScanning: "no", // Matikan UI scanning agar tidak ada overlay hitam
        });

        const { renderer, scene, camera } = mindarThree;

        // Tambahkan objek 3D ke scene
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: "blue" });
        const cube = new THREE.Mesh(geometry, material);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(cube);

        // Mulai AR
        await mindarThree.start();
        console.log("MindAR engine started successfully!");

        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });
      } catch (error) {
        console.error("Error starting AR:", error);
        alert(`Failed to start AR: ${error.message}`);
      }
    };

    startAR();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        AR Page
      </h1>
      {/* Container untuk AR */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "90vh",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      ></div>
      {/* Tombol Kembali */}
      <div
        style={{ textAlign: "center", position: "relative", marginTop: "92vh" }}
      >
        <Link to='/'>
          <button
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
