import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssays = ({ question, children }) => {
    return (
        <SingleEssaysStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssaysStyled>
    );
};

export default SingleEssays;

// prop types
SingleEssays.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.any,
};

const SingleEssaysStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #034444;

    h3 {
        background-color: #034444;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        padding: 20px;
    }
`;
