import styled from 'styled-components';

export const Content = styled.div`
  background: black;
  display: flex;
  max-width:60%;
  margin: auto;
  margin-top: 5%;
  border: solid white 5px;
  padding: 3%;
  padding-right: 4.5%;
  align-items: center;
  box-shadow:  white 0px 0px 100px 30px;

  @media(max-width:900px){
    flex-direction:column;
  }

  p{
    color: #007fff ;
    font-size : 10rem;
    margin-left: 20px;

    @media(max-width: 900px){
      display:none;
    }
  }
 //########################################### UPSIDE ##########################################################//

 .clockConf{
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media(max-width:900px){   
      justify-content: center;
    }

  .clock{
    display:flex;
    width:40%;
    height: 150px;
    flex-direction:column;

    @media(max-width:1200px){
      width:35%;
      height: 130px;
    }
    @media(max-width:900px){
      width: 20%;
      height: 180px;
      padding: 5%;
    }
    @media(max-width:600px){
      width: 20%;
      height: 150px;
      padding: 5%;
    }
    
    .seconds1-0{
      display: flex;
      width:100%;
      height: 100%;
      border: solid  #007fff  10px;
      border-bottom: #1C1C1C solid 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-1{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-right: solid  #007fff  10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-2{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-right: solid  #007fff  10px;
      border-top: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-3{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-right: solid  #007fff  10px;
      border-top: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-4{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-right: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-top: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-5{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-right: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-6{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-right: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-7{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: solid  #007fff  10px;
      border-right: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      border-bottom: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-8{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: solid  #007fff  10px;
      border-right: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds1-9{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: solid  #007fff  10px;
      border-right: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }

      //################################################## DOWNSIDE ##################################################

      .seconds2-0{
      display: flex;
      width:100%;
      height: 100%;
      border: solid  #007fff  10px;
      border-top: none;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-1{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-right: solid  #007fff  10px;
      border-top: none;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-2{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-left: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-right: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-3{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-4{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      border-bottom: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-5{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-6{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-7{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      border-bottom: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-8{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-bottom: solid  #007fff  10px;
      border-left: solid  #007fff  10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
      .seconds2-9{
      display: flex;
      width:100%;
      height: 100%;
      border: solid #1C1C1C 10px;
      border-top: none;
      border-right: solid  #007fff  10px;
      border-left: solid #1C1C1C 10px;
      border-bottom: solid #1C1C1C 10px;
      box-shadow:  #007fff 0px 0px 100px -20px;
      }
    }
  }
`
export const DaysOfWeek = styled.div`
  display: flex;
  max-width: 62.5%;
  margin: auto;
  margin-top: 1%;
  height: 100px;
  justify-content: space-between;
  border: solid white 5px;
  background: black;
  padding: 0 2.5%;
  align-items: center;

  p{
    font-size: 2rem;
    color: #1C1C1C ;

    @media(max-width: 900px){
      font-size: 1.5rem;
    }
    @media(max-width: 600px){
      font-size: 1rem;
    }
  }
  .color{
    color: #007fff;
    font-size: 2rem;

    @media(max-width: 900px){
      font-size: 1.5rem;
    }
    @media(max-width: 600px){
      font-size: 1rem;
    }
  }
`
