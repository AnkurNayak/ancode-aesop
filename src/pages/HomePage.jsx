import CardsLgImgLeft from "../components/common/CardsLgImgLeft";
import CardsLgImgRt from "../components/common/CardsLgImgRt";
import CarouselSlider from "../components/homepage/CaroselSlider";
import SquareBox from "../components/common/SquareBox";
import MainBanner from "../components/homepage/mainbanner/MainBanner";
import CarouselSliderWithHeader from "../components/homepage/CarouselSliderWithHeader";
import CarouselBannerBox from "../components/homepage/CarouselBannerBox";
import Quote from "../components/homepage/Quote";
import Certification from "../components/homepage/Certification";

const HomePage = () => {
  return (
    <div className="flex flex-col relative">
      <MainBanner />
      <CardsLgImgLeft
        imgUrlLg="https://www.aesop.com/u1nb1km7t5q7/23mX2EVjoEY3EflqXW2ajg/7fb9b7d000b8cdb875fd12bbb5ad95b0/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
        imgUrlMd="https://www.aesop.com/u1nb1km7t5q7/56DgZ3pZ10DXjzZvPGK76Z/a4ea6884a02138abdbd7ef91634bcbff/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Tablet_1400x788px.jpg"
        imgUrlSm="https://www.aesop.com/u1nb1km7t5q7/5QO3BVpTLjVvzZGJB7cS40/ed3984ed8d4b7b2dda15eb4324268e51/Aesop_Festive_Sleeve_HK_2024_Web_Homepage_Secondary_Mid_Mobile_900x900px.jpg"
        tag="Festive giving"
        title="A complimentary sleeve for your gifts"
        content="Inspired by the verve of the season, a specially designed gift
              sleeve will swaddle your purchases when you select the ‘gift
              packaging’ option at checkout. Exclusions apply."
        btnText="Explore gifts"
      />

      <SquareBox
        imgUrlLg="https://www.aesop.com/u1nb1km7t5q7/UNC2CaQtqARmMN0LO9DCc/bb34ebc74d72ea79ce7f7f7d0dac4ebc/Aesop_Fragrance_Anthology_Volume_I_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
        imgUrlMd="https://www.aesop.com/u1nb1km7t5q7/18MHZ5QW1c4DnDxMYkyMcj/eb474fb9221592acc43aa794aaa19196/Aesop_Fragrance_Anthology_Volume_I_Web_Homepage_Secondary_Mid_Tablet_1400x788px.jpg"
        imgUrlSm="https://www.aesop.com/u1nb1km7t5q7/22GdkQDdsZ0NjFinMgmLg0/21ce647ab21c8128ccaf53214745c676/Aesop_Fragrance_Anthology_Volume_I_Web_Homepage_Secondary_Mid_Mobile_900x900px.jpg"
        vidUrl="https://videos.ctfassets.net/u1nb1km7t5q7/6zoc46Ksxu0R9C0Xc6LaCn/9f5ac4f239da5914926b403fae67d4f2/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Gifts_for_Home_1920x1080px.mp4.mp4"
        imgTitle="Six aromatic encounters"
        imgContent="  Fragrance Anthology Volume I invites curious noses to explore and
          experience our range of unorthodox aromas, from the fresh to the
          floral, the woody and the opulent."
        vidTitle="Home gifts"
        vidContent="From hand care to home fragrances, explore a curation of products that
          are ideal for hospitable hosts, the house-proud or the recently moved
          in."
      />
      <div className="padding__container">
        <CarouselSlider />
      </div>
      <SquareBox
        imgUrlLg="https://www.aesop.com/u1nb1km7t5q7/4yqO6ehckkTErlTa6NLC8G/23f3073fcac5f863e5cc3fafb9d94678/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Image_Gifts_for_Travel_1920x1080px.jpg"
        imgUrlMd="https://www.aesop.com/u1nb1km7t5q7/4yqO6ehckkTErlTa6NLC8G/23f3073fcac5f863e5cc3fafb9d94678/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Image_Gifts_for_Travel_1920x1080px.jpg"
        imgUrlSm="https://www.aesop.com/u1nb1km7t5q7/4yqO6ehckkTErlTa6NLC8G/23f3073fcac5f863e5cc3fafb9d94678/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Image_Gifts_for_Travel_1920x1080px.jpg"
        vidUrl="https://videos.ctfassets.net/u1nb1km7t5q7/6c1HYo7FKUKnKE54hG5bTu/f4a1349a1d43c502218801d91c3a1b99/Aesop_Gift_Kits_2024-25_Web_Homepage_Secondary_Favourite_Formulations_1920x1080px.mp4"
        imgTitle="For their travel bag"
        imgContent="Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials."
        vidTitle="Noteworthy gifts"
        vidContent="From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing."
      />
      <div className="padding__container pb-[100px]">
        <CarouselSliderWithHeader />
      </div>
      <CardsLgImgRt
        vidUrl="https://videos.ctfassets.net/u1nb1km7t5q7/1vcs0LHREpU7wUIViDZfsh/165c6e7b54d4198d94005227a6768a2c/Aesop_Gestures_Page_Web_Secondary_Message_Mid_Desktop_1920x1080px.mp4"
        tag="Our online offering "
        title="Gestures to enhance your experience"
        content="Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging. "
        btnText="Explore our online offering"
      />
      <CardsLgImgLeft
        imgUrlLg="https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg"
        imgUrlMd="https://www.aesop.com/u1nb1km7t5q7/3F6KNBouhI3XkZwUQ7iNoA/5546c4c9c01ed154b18fe7197991de03/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Tablet_1400x788px.jpg"
        imgUrlSm="https://www.aesop.com/u1nb1km7t5q7/6JCbsJPbpW6lS077B3oQmp/83d60219ef09790ed0ea883b32670ad2/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Mobile_640x640px.jpg"
        tag="Tokens of appreciation"
        title="Corporate gifts"
        content="Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery."
        btnText="Learn more about this service"
      />
      <CarouselBannerBox />
      <CardsLgImgLeft
        imgUrlLg="https://www.aesop.com/u1nb1km7t5q7/48WUU7O1mDZ0jSogoWRyNl/151c278f42d867e1d2dd786e74174ab1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Desktop_2560x1440px.jpg"
        imgUrlMd="https://www.aesop.com/u1nb1km7t5q7/50yfP8qTyL8IMxevuAgouF/b6f5afa06fdfb3b5c827fda7ae50e2a0/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Tablet_1400x788px.jpg"
        imgUrlSm="https://www.aesop.com/u1nb1km7t5q7/1GV4P3p4NV28ctHcEOyp1L/7dd1cf15783e56f29e80b3f91e517ca1/Aesop_IFT_Event_TH_Web_Homepage_Secondary_Mid_Mobile_900x900px.jpg"
        title="Virtual guidance from home's comfort"
        content="For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order."
        btnText="Discover live consultations"
      />

      <Quote />
      <Certification />
    </div>
  );
};

export default HomePage;
