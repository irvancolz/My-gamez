import styled from "styled-components";

export const ReviewBar = styled.div`
    position: relative
    padding: 1rem;
    flex-basis: 75%;
    & div{
        border-radius: 0 .5rem .5rem 0;
        padding: .25rem;
        background-color: var(${props => props.title === 'exceptional' ? '--green-bg-col' : props.title === 'recommended' ? '--cyan-bg-col' : props.title === 'meh' ? '--gold-bg-col' : '--red-bg-col'});
        width: calc(${props => props.count / props.total} * 100%);
        transition: width .5s ease-in;
    }
`