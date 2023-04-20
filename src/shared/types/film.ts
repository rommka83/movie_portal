export interface IFilm {
  id: number;
  externalId: {
    kpHD: string | null;
    imdb: string;
    tmdb: number;
  };
  name: string;
  alternativeName: string;
  enName: string | null;
  names:
    | {
        name: string;
        language: string;
        type: string;
      }[]
    | { name: string }[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string | null;
  slogan: string | null;
  status: string | null;
  rating: {
    kp: number;
    imdb: number;
    // tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  votes: {
    kp: number;
    imdb: number;
    // tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  movieLength: number;
  ratingMpaa: string | null;
  ageRating: number | null;
  // logo: {
  //   url: string | null;
  // };
  poster: {
    url: string;
    previewUrl: string;
  };
  // backdrop: {
  //   url: string;
  //   previewUrl: string;
  // };
  videos: {
    trailers: {
      url: string;
      name: string;
      // site: string;
      // type: string;
      // size: number;
    }[];
    // teasers: [
    //   {
    //     url: string;
    //     name: string;
    //     site: string;
    //     type: string;
    //     size: number;
    //   }
    // ];
  };
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
  persons: {
    id: number;
    photo: string;
    name: string | null;
    enName: string;
    // description: string;
    profession: string;
    enProfession: string;
  }[];
  // reviewInfo: {
  //   count: number;
  //   positiveCount: number;
  //   percentage: string;
  // } | null;
  // seasonsInfo: [
  //   {
  //     number: number;
  //     episodesCount: number;
  //   }
  // ];
  // budget: {
  //   value: number;
  //   currency: string;
  // };
  // fees: {
  //   world: {
  //     value: number;
  //     currency: string;
  //   };
  //   russia: {
  //     value: number;
  //     currency: string;
  //   };
  //   usa: {
  //     value: number;
  //     currency: string;
  //   };
  // };
  // premiere: {
  //   country: string;
  //   world: string;
  //   russia: string;
  //   digital: string;
  //   cinema: string;
  //   bluray: string;
  //   dvd: string;
  // };
  similarMovies: {
    id: number;
    name: string;
    enName: string;
    alternativeName: string;
    type: string;
    poster: {
      url: string;
      previewUrl: string;
    };
  }[];
  // sequelsAndPrequels: [
  //   {
  //     id: number;
  //     name: string;
  //     enName: string;
  //     alternativeName: string;
  //     type: string;
  //     poster: {
  //       url: string;
  //       previewUrl: string;
  //     };
  //   }
  // ];
  // watchability: {
  //   items: [
  //     {
  //       name: string;
  //       logo: {
  //         url: string;
  //       };
  //       url: string;
  //     }
  //   ];
  // };
  // releaseYears: [
  //   {
  //     start: number;
  //     end: number;
  //   }
  // ];
  top10: number | null;
  top250: number | null;
  facts:
    | {
        value: string;
        type: string;
        spoiler: true;
      }[]
    | null;
  // imagesInfo: {
  //   postersCount: number;
  //   backdropsCount: number;
  //   framesCount: number;
  // };
  // productionCompanies: [
  //   {
  //     name: string;
  //     url: string;
  //     previewUrl: string;
  //   }
  // ];
}
export {};
