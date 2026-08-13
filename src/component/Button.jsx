
const Button = ({label, functionality}) => {
    return ( 
        <button onClick={functionality} className="border p-1 rounded text-sm">{label}</button>
     );
}
 
export default Button;