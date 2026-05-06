let state: string = "pending";
state = "success";
state = "rejected";
state = "done";

// literal type
type Success = "success";
type Rejected = "rejected";
type Pending = "pending";

type State2 = Success | Rejected | Pending;

// literal union
type State = "pending" | "success" | "rejected";
let state2: State = "pending";
// state2 = "done";


