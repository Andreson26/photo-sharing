interface Photo {
 // [x: string]: ReactNode;
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  current_user_collections: any[];
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: string;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
    };
  };

  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
  };
}

interface Collection {
  cover_photo: {
    alt_description: string;
    created_at: string;
    current_user_collections: any[];
    description: string;
    id: string;
    likes: number;
    links: {
      download: string;
      download_location: string;
      html: string;
      self: string;
    };
    updated_at: string;
    urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      small_s3: string;
      thumb: string;
    };
    user: {
      bio: string;
      first_name: string;
      id: string;
      instagram_username: string;
      last_name: string;
      links: {
        followers: string;
        photos: string;
        portfolio: string;
        self: string;
      };
      location: string;
      name: string;
      portfolio_url: string;
      profile_image: {
        large: string;
        medium: string;
        small: string;
      };
      total_collections: number;
      total_likes: number;
      total_photos: number;
      updated_at: string;
      username: string;
    };
  };
  description: string;
  id: string;
  last_collected_at: string;
  links: {
    html: string;
    photos: string;
    related: string;
    self: string;
  };
  preview_photos: [
    {
      created_at: string;
      id: string;
      updated_at: string;
      urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
      };
    }
  ];
  published_at: string;
  tags: [
    {
      source: {
        ancestry: {
          category: {
            pretty_slug: string;
            slug: string;
          };
          type: {
            pretty_slug: string;
            slug: string;
          };
        };
        cover_photo: cover_photo;
        description: string;
        meta_description: string;
        meta_title: string;
        subtitle: string;
        title: string;
      };
      title: string;
    }
  ];
  title: string;
  total_photos: number;
  updated_at: string;
  user: {
    first_name: string;
    id: string;
    instagram_username: string;
    last_name: string;
    links: {
      followers: string;
      following: string;
      html: string;
      likes: string;
      photos: string;
      portfolio: string;
      self: string;
    };
    name: string;
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
    total_collections: number;
    total_likes: number;
    total_photos: number;
    updated_at: string;
    username: string;
  };
}

const searchResult: SeachResult = {
  total: number,
  total_pages: number,
  results: [
    {
      alt_description: string,
      created_at: string,
      description: string,
      id: string,
      likes: number,
      links: {
        download: string,
        download_location: string, 
        html: string,
        self: string,
      },
      updated_at: string,
      urls: {
        full: string,
        raw: string,
        regular: string,
        small: string,
        small_s3: string,
        thumb: string,
      },
      user: {
        bio: string,
        first_name: string,
        id: string,
        instagram_username: string,
        last_name: string,
        links: {
          followers: string,
          photos: string,
          portfolio: string,
          self: string,
        },
        location: string,
        name: string,
        portfolio_url: string,
        profile_image: {
          large: string,
          medium: string,
          small: string,
        },
        total_collections: number,
        total_likes: number,
        total_photos: number,
        updated_at: string,
        username: string,
      },
    }
  ]
}


 interface SearchResult {
  results: string[]
 }

export type PhotoList = Photo[];

//export type Photo = Photo[];

export type SinglePhoto = Photo;

export type CollectionList = Collection[];

export type SingleCollection = Collection;

export type Result = SearchResult;

export type PhotoResult = SearchResult.results



