import { useNavigate } from "react-router-dom";

function Rofls(){
    let history = useNavigate();
    function handleClick() {
        history(-1);
    }

    return(
        <foto className="flex justify-center items-center py-20 px-20">
            <img src="/media/hahahaha.png" className="h-fit w-fit" onClick={handleClick} alt="" />
        </foto>
    )
}

export default Rofls;