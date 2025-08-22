// Cursor.js
import React, { useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-circle');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.style.width = '80px';
      cursor.style.height = '80px';
      cursor.style.borderColor = '#60946E';
    };

    const shrinkCursor = () => {
      cursor.style.width = '50px';
      cursor.style.height = '50px';
      cursor.style.borderColor = '#282c34';
    };

    document.addEventListener('mousemove', moveCursor);

    // Expanded list of clickable elements
    const clickableElements = document.querySelectorAll(`
      a, 
      button, 
      .view-project-btn,
      .tag,
      [onclick],
      [role="button"],
      input[type="submit"],
      input[type="button"],
      .projectProcess h2,
      .projectProcess img,
      .coding-project h2,
      .coding-project img
    `);

    clickableElements.forEach((element) => {
      element.addEventListener('mouseenter', growCursor);
      element.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseenter', growCursor);
        element.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return <div className="cursor-circle"></div>;
};

export default Cursor;