// States.
function useState() {
    let state = 0;

    function setState(newVal) {
        state = newVal;
    }

    function getState() {
        return state;
    }

    return [getState, setState];
}

const [getCount1, setCount1] = useState();
const [getCount2, setCount2] = useState();

setCount1(5);
setCount2(10);

console.log(getCount1());
console.log(getCount2());

// function a() {
// 	var x = 4;
// 	let y = 5;
// 	const z = 6;
// 	{
// 		let y = 50;
// 		const z = 60;
// 		console.log(x, y, z);
// 	}
// 	console.log(x, y, z);
// }
// a();