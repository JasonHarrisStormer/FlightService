import sadFace from '../50e.jpg';
import { Center } from "../components/Formatting/StyledComponents";

export const Error = () => {
    return (
        <>
            {/* <Center>
                <h1> This is not the page you were looking for... </h1>
            </Center> */}
            <Center>
                <div><img src={sadFace} alt="Move Along, Move Along..." height={400}></img></div>
            </Center>
        </>
    );
}