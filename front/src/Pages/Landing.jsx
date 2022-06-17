import { useState } from "react";
import { useSelector } from "react-redux";
import { PropComponent } from "../components/Props";
import { RefExample } from "../components/RefExample";
import { CSSComponent, StyledComponents, Center } from "../components/StylePractice";
import { Article } from "../components/Article";
import { ClassCounter, FunctionCounter } from "../components/Counter"; // same things as /components/Counter/index.js


export const Landing = () => {

    
    const [shouldRender, setShouldRender] = useState(true);

    const toggleComponent = () => {
        setShouldRender(!shouldRender);
    }

    const username = useSelector(store => store.username);

    return (
        <>
            <CSSComponent />
            <StyledComponents />          
            <Center>
                <Article title="Welcome to Flight Services" author="Jason Harris" datePublished="07/08/2022">
                    <p>
                        Here, you will be able to add and look up flights and passengers.
                    </p>
                    <p>
                        First point, React is flexible.
                    </p>
                    <p>
                        In conclusion, React is awesome.
                    </p>
                </Article>
            </Center>
        </>
    );
}