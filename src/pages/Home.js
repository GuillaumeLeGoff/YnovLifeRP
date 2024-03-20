import React from 'react';
import './Home.css'; // Make sure the path is correct

function Home() {
  return (
    <div className="backgroundImageContainer">
      <img src="./images/background.png" alt="background" className="backgroundImage" />

      <div className="container">

        <div className="textContainer">

          <h1 className="title">Ouverture vendredi 15 janvier</h1>

          <p className="loremText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo. Curabitur quam urna, ultricies non varius sed, venenatis quis augue. Nam ac risus lectus. Aliquam erat volutpat. Aliquam erat volutpat. Vivamus quis malesuada magna. Proin
          </p>


        </div>
        <div className='blocInfo'>
          <h1 className="titleBlocInfo">Info serveur</h1>
          <p className="subtittleBlocInfo">
            1.Police
          </p>
          <p className="textBlocInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo. Curabitur quam urna, ultricies non varius sed, venenatis quis augue. Nam ac risus lectus. Aliquam erat volutpat. Aliquam erat volutpat. Vivamus quis malesuada magna. Proin
          </p>

          <p className="subtittleBlocInfo texteMarginTop">
            2.Metier
          </p>
          <p className="textBlocInfo ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo.
          </p>

          <img src="./images/InfoPicture.png" alt="Info" className="blocInfoImage" />
        </div>

        <div className='blocHistoire'>
          <h1 className="titleBlocHistoire">Histoire</h1>
          <p className="subtittleBlocHistoire">
            1.Police
          </p>
          <p className="textBlocHistoire">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo. Curabitur quam urna, ultricies non varius sed, venenatis quis augue. Nam ac risus lectus. Aliquam erat volutpat. Aliquam erat volutpat. Vivamus quis malesuada magna. Proin
          </p>

          <p className="subtittleBlocHistoire texteMarginTop">
            2.Metier
          </p>
          <p className="textBlocHistoire ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit vitae libero efficitur commodo. Nunc at velit vitae libero efficitur commodo. Nunc at velit vitae libero efficitur commodo.
          </p>

          <img src="./images/blocHistoire.png" alt="Info" className="blocHistoireImage" />
        </div>
      </div>
    </div>
  );
}

export default Home;