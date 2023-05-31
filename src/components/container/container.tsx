import React from "react";
import {Navbar} from "@/components/navbar";

interface ContainerProps {
}

export const Container: React.FunctionComponent<ContainerProps> = (props: React.PropsWithChildren) => {
    return <>
        <Navbar drawer={true}/>
        {props.children}
    </>
};

