// Conditional Types with refer (Inference Type)

// Syntax 
// Conditional<T> = T extends string ? "string type" : "no string type";

// ex1
type IsString<T> = T extends string ? true : false;
type Tone = IsString<"Hello">; // true
type Ttwo = IsString<50>; // false

// infer (Extract type from array)

// ##########   I don't understand it yet. I'll learn after I see it in a real-world project.   ##########