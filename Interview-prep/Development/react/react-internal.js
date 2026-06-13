//! Step 1 we write jsx
function Parent() {
    return (
        <div id="main">
            <h1>Hello</h1>
            <h1>World</h1>
        </div>
    );
}

/* 

Jab code chalta hai, to Babel aapke JSX ko transpile karke React.createElement() (ya naye React versions mein _jsx()) mein badal deta hai 

you can check example below 👇

{
    type: 'div',
    props: {
        id: 'main',
        children: [
            { type: 'h1', props: { children: 'Hello' } },
            { type: 'h1', props: { children: 'World' } }
        ]
    }
}

*/

/*

Fiber Node Ka Banna Aur Memory Me Save RehnaAapne : "Kya is DOM ko memory mein safe rakhta hai React?"Haan, bilkul rakhta hai! Lekin React directly is plain JavaScript Object (React Element) par diffing nahi karta. React is element ko badalta hai ek Fiber Node mein.Fiber Node kya hai? Yeh ek internal object hai jisme component ki state, props, real DOM ka reference (stateNode), aur doosre nodes ke links (child, sibling, return) hote hain.Initial Render ke waqt: React is pure object tree ko pehli baar read karta hai, har element ke liye ek Fiber Node banata hai, aur unhe memory mein save kar leta hai. Is tree ko hum current tree kehte hain. Kyuki pehli baar koi purana tree nahi tha, isliye bina kisi comparison (diffing) ke yeh poora ka poora tree seedhe Real DOM mein create ho jata hai.

you can check example below 👇


const divFiber = {
  type: 'div',
  stateNode: <div id="main">...</div>, // DOM reference
  child: h1Fiber1,
  sibling: null,
  return: null // parent nahi hai
}

const h1Fiber1 = {
  type: 'h1',
  stateNode: <h1>Hello</h1>,
  child: null,
  sibling: h1Fiber2,
  return: divFiber
}

const h1Fiber2 = {
  type: 'h1',
  stateNode: <h1>World</h1>,
  child: null,
  sibling: null,
  return: divFiber
}



Initial Render ke waqt: React is pure object tree ko pehli baar read karta hai, har element ke liye ek Fiber Node banata hai, aur unhe memory mein save kar leta hai. Is tree ko hum current tree kehte hain. Kyuki pehli baar koi purana tree nahi tha, isliye bina kisi comparison (diffing) ke yeh poora ka poora tree seedhe Real DOM mein create ho jata hai.

*/

//! Let's begin paint this in real dom

/**
 * ============================================================
 * PART 2: React Ka Core Engine — Fiber Architecture & Double Buffering
 * ============================================================
 *
 * React rendering ke dauran browser ko block hone se bachane ke liye
 * Fiber Architecture aur Double Buffering use karta hai.
 *
 * ----------------------------------------------------------------
 * 1. Double Buffering Strategy
 * ----------------------------------------------------------------
 *
 * React memory mein ek saath do trees maintain karta hai:
 *
 * 1. Current Tree
 *    - Jo currently screen par render ho raha hai.
 *
 * 2. WorkInProgress (WIP) Tree
 *    - Background mein prepare ho raha naya tree.
 *
 * Jab WIP Tree complete ho jata hai, React ek pointer swap karta hai:
 *
 *    Current Tree = WorkInProgress Tree
 *
 * Isse user ko koi visual glitch ya half-rendered UI nahi dikhti.
 */


/**
 * ============================================================
 * PART 3: Step-by-Step Render Pipeline (Initial Render → Update)
 * ============================================================
 *
 * Scenario:
 * User ne button click kiya, state change hui aur do <h1> elements
 * ka order change ho gaya (without keys).
 */


/**
 * ------------------------------------------------------------
 * STEP 1: Trigger Phase (State Change)
 * ------------------------------------------------------------
 *
 * setState() call hote hi:
 *
 * 1. React component ke Fiber Node par Update Queue schedule karta hai.
 * 2. Scheduler ko notify karta hai ki component ko re-render karna hai.
 */


/**
 * ------------------------------------------------------------
 * STEP 2: Render Phase (WorkInProgress Tree Generation)
 * ------------------------------------------------------------
 *
 * Ye phase asynchronous hoti hai.
 * Isse pause aur resume kiya ja sakta hai.
 *
 * Process:
 *
 * 1. React Current Tree ka clone banana shuru karta hai.
 * 2. Is cloned tree ko WorkInProgress (WIP) Tree kehte hain.
 * 3. State-change wale component tak pahunchne par:
 *      - Component function dobara execute hota hai.
 *      - Naya JSX generate hota hai.
 *      - Naya Virtual DOM milta hai.
 */


/**
 * ------------------------------------------------------------
 * STEP 3: Reconciliation Phase (Diffing Algorithm)
 * ------------------------------------------------------------
 *
 * React O(N³) tree comparison algorithm use nahi karta.
 *
 * React O(N) Heuristic Diffing Algorithm use karta hai
 * jo do assumptions par based hai:
 *
 * Rule #1:
 * Agar do elements ka type different hai,
 * to pura subtree destroy karke naya create karo.
 *
 * Rule #2:
 * Agar type same hai,
 * to props aur children compare karo.
 */


/**
 * ------------------------------------------------------------
 * CASE: H1 Elements Ka Order Change (Without Keys)
 * ------------------------------------------------------------
 *
 * OLD VDOM (Current Tree)
 *
 * Index 0 -> <h1>Hello</h1>
 * Index 1 -> <h1>World</h1>
 *
 *
 * NEW VDOM (WorkInProgress Tree)
 *
 * Index 0 -> <h1>World</h1>
 * Index 1 -> <h1>Hello</h1>
 *
 *
 * React index-based matching karega:
 *
 * --------------------------------------------------
 * LOOP #1 (Index 0)
 * --------------------------------------------------
 *
 * Old Type = h1
 * New Type = h1
 *
 * Type Matched ✅
 *
 * Old Text = Hello
 * New Text = World
 *
 * Text Changed ❌
 *
 * Effect:
 *    Update Text: "Hello" -> "World"
 *
 *
 * --------------------------------------------------
 * LOOP #2 (Index 1)
 * --------------------------------------------------
 *
 * Old Type = h1
 * New Type = h1
 *
 * Type Matched ✅
 *
 * Old Text = World
 * New Text = Hello
 *
 * Text Changed ❌
 *
 * Effect:
 *    Update Text: "World" -> "Hello"
 */


/**
 * ------------------------------------------------------------
 * PROBLEM WITHOUT KEYS
 * ------------------------------------------------------------
 *
 * React ko laga:
 *
 *   - Dono h1 apni jagah par hi hain.
 *   - Sirf text content change hua hai.
 *
 * Actual mein elements move hue the,
 * lekin React ne move operation detect nahi kiya.
 *
 * Result:
 *   - Text rewrite hua.
 *   - Stateful components mein state mismatch ho sakti hai.
 *
 * Isi liye React list rendering mein "key" use karne ki
 * recommendation deta hai.
 */


/**
 * ------------------------------------------------------------
 * STEP 4: Effect List Creation
 * ------------------------------------------------------------
 *
 * Diffing ke dauran React changed Fiber Nodes par flags lagata hai:
 *
 * Examples:
 *   - Placement
 *   - Update
 *   - ChildDeletion
 *
 * Saare changed fibers milkar ek Effect List banate hain.
 *
 * Effect List = Real DOM par apply hone wale operations ki list.
 */


/**
 * ------------------------------------------------------------
 * STEP 5: Commit Phase (Real DOM Mutation)
 * ------------------------------------------------------------
 *
 * Ye phase synchronous hoti hai.
 *
 * Isse pause nahi kiya ja sakta,
 * warna UI incomplete state mein dikhegi.
 *
 * ReactDOM:
 *
 * 1. Effect List uthata hai.
 * 2. Real DOM mutations apply karta hai.
 *
 * Example:
 *
 *    node.textContent = "World";
 *
 * Saare updates complete hone ke baad:
 *
 *    Current Tree = WorkInProgress Tree
 *
 * Pointer swap ho jata hai.
 *
 * Purana tree garbage collection ke liye eligible ho jata hai.
 */


/**
 * ============================================================
 * SUMMARY
 * ============================================================
 *
 * JSX → Object
 * --------------------------------------
 * Algorithm:
 *    Babel Transpilation
 *
 * Purpose:
 *    JSX ko JavaScript Objects (Virtual DOM) mein convert karna.
 *
 *
 * Fiber Tree Creation
 * --------------------------------------
 * Algorithm:
 *    Fiber Architecture
 *
 * Purpose:
 *    Tree ko linked structure mein store karna taaki work split ho sake.
 *
 *
 * Tree Traversal
 * --------------------------------------
 * Algorithm:
 *    DFS (Depth First Search)
 *
 * Purpose:
 *    WIP Tree build karna aur nodes traverse karna.
 *
 *
 * Node Comparison
 * --------------------------------------
 * Algorithm:
 *    Heuristic Diffing O(N)
 *
 * Purpose:
 *    Type aur Key ke basis par nodes compare karna.
 *
 *
 * List Reconciliation
 * --------------------------------------
 * Algorithm:
 *    Index Matching (No Key)
 *    Key Matching (With Key)
 *
 * Purpose:
 *    Child elements ke order aur identity ko detect karna.
 *
 *
 * DOM Updates
 * --------------------------------------
 * Algorithm:
 *    Commit Phase Mutations
 *
 * Purpose:
 *    Sirf changed nodes ko Real DOM mein update karna.
 *
 * ============================================================
 */