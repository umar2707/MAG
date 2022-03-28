import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:15px;
    font-weight:500;
    letter-spacing: 10px;
`
const Announcement = () => {
  return (
    <Container>
        O'zbekiston bo'ylab dostavka
    </Container>
  )
}

export default Announcement