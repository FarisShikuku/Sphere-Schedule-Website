'use client';

import { useState } from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Toggle({ checked = false, onChange, disabled = false }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      style={{
        position: 'relative',
        width: 44,
        height: 24,
        borderRadius: 12,
        background: isChecked ? 'var(--color-sphere)' : 'var(--card-2)',
        border: isChecked ? 'none' : '1px solid var(--border)',
        transition: 'background 0.3s',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'white',
          boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
          transform: isChecked ? 'translateX(20px)' : 'translateX(2px)',
          transition: 'transform 0.3s',
        }}
      />
    </button>
  );
}