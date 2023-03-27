 interface Photo {
    [x: string]: ReactNode;
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

export type PhotoList = Photo[];

export type SinglePhoto = Photo;