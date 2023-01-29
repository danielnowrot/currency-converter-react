import styled from "styled-components";

export const Wrapper = styled.form`
    background-color: rgb(241, 241, 241);
    color: rgb(5, 5, 5);
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
`;

export const Input = styled.input`
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
    border-color: rgb(245, 173, 65);
`;

export const Label = styled.label`
    display: grid;
    justify-content: center;
    margin: 10px;
`;

export const LabelText = styled.span`
    padding: 5px;
    min-width: 210px;
`;

export const Select = styled.select`
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
    border-color: rgb(245, 173, 65);
`;

export const Button = styled.button`
    font-size: 20px;
    margin: 10px;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    padding: 4px 40px;
    background-color: rgb(245, 173, 65);
    border-color: rgb(245, 173, 65);
    cursor: pointer;
`;

export const StyledResult = styled.p`
    display: inline-block; 
`;

export const ResultText = styled.span`
    display: grid;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    border-color: rgb(245, 173, 65);
    font-size: 20px;
    padding: 5px 18px;
`;

export const InfoText = styled.p`
    font-size: 14px;
    margin-top: 40px;
`;

