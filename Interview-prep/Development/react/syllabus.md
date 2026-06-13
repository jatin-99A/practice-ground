# React Learning Roadmap

## 1. Component Basics & Rendering Lifecycle

### JSX Mechanics

Understand how JSX compiles into `React.createElement` calls and ultimately JavaScript objects that describe the UI.

### Functional Components

Modern React uses functional components instead of legacy class components for cleaner and simpler architecture.

### Virtual DOM & Reconciliation

Learn how React’s Fiber engine:

* Compares Virtual DOM trees
* Calculates minimal updates
* Efficiently updates the real DOM

### The Key Prop

Keys are essential in lists because they:

* Help React identify elements uniquely
* Prevent unnecessary re-renders
* Maintain stable identity across updates

### Props vs State

* **Props** → Immutable data passed from parent to child
* **State** → Mutable, internal component data that can change over time

---

## 2. React Hooks (Core & Advanced)

### Basic Hooks

#### useState

Manages local component state.

#### useEffect

Handles side effects such as:

* Data fetching
* Event listeners
* Cleanup logic

---

### Performance Hooks

#### useMemo

Caches computed values to avoid expensive recalculations.

#### useCallback

Caches function references to prevent unnecessary re-renders.

---

### Reference Hooks

#### useRef

Used for:

* Persisting values without re-rendering
* Direct DOM access

---

### Context Hooks

#### useContext

Solves prop drilling by sharing state across deeply nested components.

---

### Advanced Hooks

#### useReducer

Manages complex state logic using reducer patterns.

#### useTransition

Handles non-blocking UI updates for smoother interactions.

#### useDeferredValue

Defers expensive updates to improve rendering performance.

---

### Custom Hooks

Encapsulate reusable logic into custom stateful functions for cleaner architecture and reusability.

---

### Rules of Hooks

Hooks must:

* Be called only at the top level
* Be called only inside React functions or custom hooks

---

## 3. State Management & Data Flow

### Lifting State Up

Move shared state to the closest common parent to share data between sibling components.

---

### Component Composition

Use `children` and composition patterns instead of deeply nested prop drilling.

---

### Global State Management

Choose tools based on complexity:

* React Context → Lightweight global state
* Redux Toolkit → Large-scale structured state
* Zustand → Simple and scalable state management
* Recoil → Atomic state model

---

### Server State vs Client State

* **Client State** → UI state, toggles, inputs
* **Server State** → API data, caching, synchronization

Tools:

* TanStack Query (React Query)
* RTK Query

---

## 4. Performance Optimization

### React.memo

Prevents unnecessary re-renders when props have not changed.

---

### Strict Mode

Runs components twice in development to detect side effects early.

---

### Code Splitting & Lazy Loading

Use:

* `React.lazy`
* `Suspense`

To split bundles and reduce initial load time.

---

### Virtualization

Efficiently render large lists using:

* `react-window`
* `react-virtualized`

---

## 5. Advanced Patterns & Concepts

### Higher-Order Components (HOC)

Functions that wrap components to add extra behavior (older but still useful conceptually).

---

### Render Props

Pass functions as props to dynamically control rendering behavior.

---

### Portals

Render components outside the parent DOM hierarchy (useful for modals, tooltips).

---

### Error Boundaries

Catch JavaScript errors in child component trees using lifecycle methods like `componentDidCatch`.

---

### Controlled vs Uncontrolled Components

* **Controlled** → React state manages form inputs
* **Uncontrolled** → DOM manages form state directly

---

## 6. Modern React Architecture & Ecosystem

### Server-Side Rendering (SSR) vs Static Site Generation (SSG)

Understand rendering strategies used in frameworks like Next.js:

* SSR → Dynamic rendering on request
* SSG → Pre-built static pages

---

### React Server Components (RSC)

Server-only components that reduce client-side bundle size and improve performance.

---

### Testing Ecosystem

Tools for testing React applications:

* Jest
* Vitest
* React Testing Library

Focus on:

* User behavior testing
* Component interaction testing
* Avoiding implementation details

---

# Summary Checklist

* [ ] JSX & Rendering Lifecycle
* [ ] Functional Components
* [ ] Virtual DOM & Reconciliation
* [ ] Props vs State
* [ ] Core Hooks (useState, useEffect)
* [ ] Performance Hooks (useMemo, useCallback)
* [ ] useRef & useContext
* [ ] Advanced Hooks (useReducer, useTransition, useDeferredValue)
* [ ] Custom Hooks
* [ ] State Management Patterns
* [ ] React.memo & Strict Mode
* [ ] Code Splitting & Lazy Loading
* [ ] Virtualization
* [ ] HOC & Render Props
* [ ] Portals & Error Boundaries
* [ ] SSR vs SSG
* [ ] React Server Components
* [ ] Testing Tools & Practices
