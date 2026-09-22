import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export default function usePhysicsSkills({
  sceneRef,
  skills,
  viewMode,
  isMobile,
  isTablet,
  onReactBodyCreated
}) {
  const engineRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    if (viewMode !== 'interactive' || !sceneRef.current || skills.length === 0) return;

    const container = sceneRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    // 1. Create Engine & World
    // Mobile/tablet gets slightly lower physics frequency for performance optimization
    const engine = Engine.create({
      gravity: { x: 0, y: 0.12 } // soft gravity
    });
    engineRef.current = engine;
    const { world } = engine;

    // 2. Create boundary walls
    const wallThickness = 100;
    const wallOptions = { 
      isStatic: true, 
      render: { visible: false },
      friction: 0.05,
      restitution: 0.5
    };

    const floor = Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, wallOptions);
    const ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, wallOptions);
    const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, wallOptions);

    Composite.add(world, [floor, ceiling, leftWall, rightWall]);

    // 3. Spawning layout: structured grid to avoid empty canvas initially
    const pillHeight = isMobile ? 36 : isTablet ? 40 : 44;
    const cols = isMobile ? 3 : isTablet ? 4 : 5;
    const rowHeight = isMobile ? 65 : isTablet ? 75 : 85;
    const colWidth = width / cols;

    const skillBodies = [];
    const skillElements = container.querySelectorAll('.skill-pill-physics');

    skills.forEach((skill, idx) => {
      const el = skillElements[idx];
      if (!el) return;

      // Calculate width based on text length and responsiveness
      const labelLength = skill.name.length;
      const charWidth = isMobile ? 7.5 : isTablet ? 8.5 : 9.5;
      const padding = isMobile ? 30 : isTablet ? 38 : 44;
      const pillWidth = Math.max(isMobile ? 70 : 90, labelLength * charWidth + padding);

      // Grid placement
      const r = Math.floor(idx / cols);
      const c = idx % cols;
      const x = colWidth * c + colWidth / 2 + (Math.random() * 20 - 10);
      const y = rowHeight * r + 60 + (Math.random() * 10 - 5);

      const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        restitution: 0.5, // bouncy capsule
        friction: 0.04,
        frictionAir: 0.02,
        chamfer: { radius: pillHeight / 2 } // capsule corners
      });

      // Pass React body reference up for onboarding animation
      if (skill.name === 'React.js' && onReactBodyCreated) {
        onReactBodyCreated(body);
      }

      body.plugin = {
        element: el,
        width: pillWidth,
        height: pillHeight
      };

      skillBodies.push(body);
    });

    Composite.add(world, skillBodies);

    // 4. Mouse Constraint for Drag/Throw
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.15,
        render: { visible: false }
      }
    });

    // Remove wheel event listeners to allow vertical page scrolls when NOT dragging
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    Composite.add(world, mouseConstraint);

    // 5. Touch Event Override to prevent accidental page scrolling during drag
    const handleTouchStart = (e) => {
      // Check if user is touching a physics body
      const mousePosition = mouse.position;
      const clickedBodies = Matter.Query.point(skillBodies, mousePosition);
      if (clickedBodies.length > 0) {
        // Prevent page scroll only if grabbing a pill
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      if (mouseConstraint.body) {
        e.preventDefault();
      }
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    // 6. Run the physics engine
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // 7. Sync visuals (DOM)
    Events.on(engine, 'afterUpdate', () => {
      skillBodies.forEach(body => {
        const el = body.plugin.element;
        if (el) {
          const { x, y } = body.position;
          const angle = body.angle;
          el.style.transform = `translate3d(${x - body.plugin.width / 2}px, ${y - body.plugin.height / 2}px, 0) rotate(${angle}rad)`;
        }
      });
    });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      Body.setPosition(floor, { x: newWidth / 2, y: newHeight + wallThickness / 2 });
      Body.setPosition(leftWall, { x: -wallThickness / 2, y: newHeight / 2 });
      Body.setPosition(rightWall, { x: newWidth + wallThickness / 2, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(world, false);
    };
  }, [viewMode, skills, isMobile, isTablet]);

  return null;
}
