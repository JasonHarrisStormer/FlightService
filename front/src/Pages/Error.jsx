import sadFace from '../50e.jpg';
import { Center } from "../components/Formatting/StyledComponents";

export const Error = () => {
    return (
        <>
            <Center>
                <div><img src={sadFace} alt="This is not the page you were looking for... Move Along, Move Along..." height={400}></img></div>
            </Center>
        </>
    );
}