import React, { useRef } from "react";
import styles from "./ThreeDSpace.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";

function Rubik() {
  const ref = useRef();
  const speed = 0.01;
  const cubeSize = 3;
  const margin = 0.2;

  useFrame(() => {
    ref.current.rotation.x += speed;
    ref.current.rotation.y += speed;
  });

  const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
  const materials = [
    new MeshStandardMaterial({ color: "blue" }),
    new MeshStandardMaterial({ color: "green" }),
    new MeshStandardMaterial({ color: "white" }),
    new MeshStandardMaterial({ color: "yellow" }),
    new MeshStandardMaterial({ color: "orange" }),
    new MeshStandardMaterial({ color: "red" }),
  ];

  const cubes = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      for (let k = -1; k <= 1; k++) {
        const mesh = (
          <mesh
            key={`${i}-${j}-${k}`}
            geometry={geometry}
            material={materials}
            position={[
              i * (cubeSize + margin),
              j * (cubeSize + margin),
              k * (cubeSize + margin),
            ]}
          />
        );
        cubes.push(mesh);
      }
    }
  }

  return <group ref={ref}>{cubes}</group>;
}

function ThreeDSpace() {
  return (
    <div className={styles.ThreeDSpace}>
      <Canvas
        camera={{
          fov: 30,
          near: 1,
          aspect: window.innerWidth / window.innerHeight,
          far: 1000,
          position: [0, 20, 90],
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Rubik />
      </Canvas>
    </div>
  );
}

export default ThreeDSpace;
