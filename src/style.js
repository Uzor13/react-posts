import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 2rem;
  grid-gap: 1rem;
  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    overflow-x: hidden;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`

export const PostDetail = styled.div`
 
`

export const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  height: 70px;
  align-items: center;
  background-color: #5B21B6;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`
export const NavList = styled.div`
  padding: 0 2rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: white;
`

export const PostCard = styled.div`
  width: 90%;
  height: 320px;
  background-color: #F3F4F6;
  border-radius: .5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: all .2s ease-in;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
  
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  height: 90%;
  gap: 1rem;
  justify-content: center;
`

export const PostHeading = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
`

export const SearchContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  @media screen and (max-width: 780px) {
    margin-left: 1rem;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  height: 35px;
  border-radius: .2rem;
  width: 400px;
  border: 1px solid #C7D2FE;
  box-shadow: rgba(0, 0, 0, 0.05) 0 1px 2px 0;
  padding-left: 1rem;
  outline: 0;
  @media screen and (max-width: 780px) {
    width: 60%;
    margin-top: 1rem;
  }
`

export const Button = styled.button`
  height: 35px;
  width: 100px;
  background-color: #5B21B6;
  color: white;
  margin-left: 1rem;
  border: 0;
  outline: none;
  border-radius: .3rem;
  font-size: 1.1rem;
  transition: all .2s ease-in;
  &:hover {
    background-color: #7C3AED;
  }
  @media screen and (max-width: 780px) {
    width: 70px;
    margin-top: 1rem;
    font-size: .8rem;
  }
`

export const DangerBtn = styled(Button) `
  background: crimson;
  transition: all .2s ease-in;
  &:hover {
    background: #fa0031;
  }
`