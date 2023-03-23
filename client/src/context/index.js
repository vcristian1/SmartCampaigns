// We will store all of our web 3 logic here, and then we will wrap our application with this context so every page and component can use it with no problems. 
import React, { useContext, createContext} from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0xed1D5a5fa234a29a843402D1b7f916B23C91F25E")
}

export default StateContextProvider;
