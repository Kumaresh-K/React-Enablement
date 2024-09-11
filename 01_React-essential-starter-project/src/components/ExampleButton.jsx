export default function ExampleButton({children, clickFn, isSelected}) {
    return (<li>
        <button 
        className={isSelected?'active':null} 
        onClick={clickFn}>
            {children}
        </button>
        </li>)
}