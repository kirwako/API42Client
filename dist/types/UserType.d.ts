declare type UserType = {
    id: number;
    email: string;
    login: string;
    first_name: string;
    last_name: string;
    usual_full_name: string;
    usual_first_name: null;
    url: string;
    phone: string;
    displayname: string;
    image_url: string;
    new_image_url: string;
    'staff?': boolean;
    correction_point: number;
    pool_month: string;
    pool_year: string;
    location: string;
    wallet: number;
    anonymize_date: string;
    data_erasure_date: string;
    created_at: string;
    updated_at: string;
    alumnized_at: null;
    'alumni?': boolean;
    groups: [any];
    cursus_users: [
        {
            grade: null;
            level: number;
            skills: [any];
            blackholed_at: null;
            id: number;
            begin_at: string;
            end_at: string;
            cursus_id: number;
            has_coalition: boolean;
            created_at: string;
            updated_at: string;
            user: [object];
            cursus: [object];
        }
    ];
    projects_users: [
        {
            id: number;
            occurrence: number;
            final_mark: null;
            status: string;
            'validated?': null;
            current_team_id: number;
            project: [object];
            cursus_ids: [any];
            marked_at: null;
            marked: boolean;
            retriable_at: null;
            created_at: string;
            updated_at: string;
        }
    ];
    languages_users: [
        {
            id: number;
            language_id: number;
            user_id: number;
            position: number;
            created_at: string;
        }
    ];
    achievements: [
        {
            id: 41;
            name: string;
            description: string;
            tier: string;
            kind: string;
            visible: boolean;
            image: string;
            nbr_of_success: null;
            users_url: string;
        }
    ];
    titles: [any];
    titles_users: [any];
    partnerships: [any];
    patroned: [any];
    patroning: [any];
    expertises_users: [
        {
            id: number;
            expertise_id: number;
            interested: boolean;
            value: number;
            contact_me: boolean;
            created_at: string;
            user_id: number;
        }
    ];
    roles: [any];
    campus: [
        {
            id: number;
            name: string;
            time_zone: string;
            language: [object];
            users_count: number;
            vogsphere_id: number;
            country: string;
            address: string;
            zip: string;
            city: string;
            website: string;
            facebook: string;
            twitter: string;
            active: boolean;
            public: boolean;
            email_extension: string;
            default_hidden_phone: boolean;
        }
    ];
    campus_users: [
        {
            id: number;
            user_id: number;
            campus_id: number;
            is_primary: boolean;
            created_at: string;
            updated_at: string;
        }
    ];
};
export default UserType;
