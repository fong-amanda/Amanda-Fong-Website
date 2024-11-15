// Cursor.js
import React, { useEffect } from 'react';
import './Cursor.css'; // Style your cursor here

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
    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', growCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('mouseenter', growCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return <div className="cursor-circle"></div>;
};

export default Cursor;
