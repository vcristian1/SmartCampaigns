// We will store all of our web 3 logic here, and then we will wrap our application with this context so every page and component can use it with no problems. 
import React, { useContext, createContext} from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0xed1D5a5fa234a29a843402D1b7f916B23C91F25E")
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        
        try {
            const data = await createCampaign([
                address, //owner
                form.title, //title
                form.description, //description
                form.target, //goal
                new Date (form.deadline).getTime() / 1000, //deadline, this is going to give us access to a number of seconds passed since 1970
                form.image,
            ])
            console.log("contract call successful", data)
        } catch (error) {
            console.log("contract call failed", error)
        }

        
    }
}

export default StateContextProvider;
