import styled from "styled-components";

import SingleEssays from "./SingleEssays.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssays question={`Q1 Sample question...`}>
                Answer 1 goes here.
            </SingleEssays>
            <SingleEssays question={`Q2 Sample question...`}>
                Answer 2 goes here.
            </SingleEssays>
            <SingleEssays question={`Q3 Sample question...`}>
                Answer 3 goes here.
            </SingleEssays>
            <SingleEssays question={`Q4 Sample question...`}>
                Answer 4 goes here.
            </SingleEssays>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
