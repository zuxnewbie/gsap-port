'use client'

import styled, { css } from "styled-components"

// Button variants
const buttonVariants = {
  default: css`
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    &:hover {
      background-color: hsl(var(--primary) / 0.9);
    }
  `,
  outline: css`
    background-color: transparent;
    color: hsl(var(--foreground));
    border: 1px solid hsl(var(--border));
    &:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  `,
  ghost: css`
    background-color: transparent;
    &:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  `,
}

// Button sizes
const buttonSizes = {
  default: css`
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
  `,
  sm: css`
    height: 36px;
    padding: 0 12px;
    font-size: 13px;
  `,
  lg: css`
    height: 44px;
    padding: 0 24px;
    font-size: 16px;
  `,
  icon: css`
    height: 40px;
    width: 40px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
}

export const Button = styled.button<{
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
  className?: string
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  outline: none;
  border: none;
  gap: 8px;

  ${(props) => buttonVariants[props.variant || "default"]}
  ${(props) => buttonSizes[props.size || "default"]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Input = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  padding: 0 12px;
  font-size: 14px;
  color: hsl(var(--foreground));
  
  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.3);
  }
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Textarea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  padding: 8px 12px;
  font-size: 14px;
  color: hsl(var(--foreground));
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.3);
  }
  
  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
