const PictureComponent = ({ imgUrlXl, imgUrlLg, imgUrlMd, imgUrlSm }) => {
  return (
    <figure className="h-full w-full box-border m-0 flex items-end">
      <picture className="m-0 p-0 text-center">
        <source media="(min-width: 1920px)" srcSet={imgUrlXl} />
        <source media="(min-width: 1025px)" srcSet={imgUrlLg} />
        <source media="(min-width: 640px)" srcSet={imgUrlMd} />
        <source media="(min-width: 0px)" srcSet={imgUrlSm} />
        <img
          alt="Aesop consultant selecting products from a ceramic bowl."
          loading="lazy"
          src={imgUrlLg}
        />
      </picture>
    </figure>
  );
};

export default PictureComponent;
