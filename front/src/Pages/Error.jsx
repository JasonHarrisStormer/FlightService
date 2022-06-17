import { Center } from '../components/StylePractice';
import sadFace from '../50e.jpg';

export const Error = () => {
    return (
        <Center>
            <h1>This is not the page you were looking for...</h1>
            <div><img src={sadFace} alt="One sad boy" height={200}/></div>
        </Center>
    );
}