type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type PostRelateToManyInput = {
  readonly create?: ReadonlyArray<PostCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PostWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PostWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly posts_every?: PostWhereInput | null;
  readonly posts_some?: PostWhereInput | null;
  readonly posts_none?: PostWhereInput | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'posts_ASC'
  | 'posts_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type CategoryWhereInput = {
  readonly AND?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type CategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCategoriesBy = 'id_ASC' | 'id_DESC' | 'name_ASC' | 'name_DESC';

export type CategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
};

export type CategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CategoryUpdateInput | null;
};

export type CategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
};

export type CategoriesCreateInput = {
  readonly data?: CategoryCreateInput | null;
};

export type CategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<CategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type MissionRelateToManyInput = {
  readonly create?: ReadonlyArray<MissionCreateInput | null> | null;
  readonly connect?: ReadonlyArray<MissionWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<MissionWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type CharityWhereInput = {
  readonly AND?: ReadonlyArray<CharityWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CharityWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly telephone?: Scalars['String'] | null;
  readonly telephone_not?: Scalars['String'] | null;
  readonly telephone_contains?: Scalars['String'] | null;
  readonly telephone_not_contains?: Scalars['String'] | null;
  readonly telephone_starts_with?: Scalars['String'] | null;
  readonly telephone_not_starts_with?: Scalars['String'] | null;
  readonly telephone_ends_with?: Scalars['String'] | null;
  readonly telephone_not_ends_with?: Scalars['String'] | null;
  readonly telephone_i?: Scalars['String'] | null;
  readonly telephone_not_i?: Scalars['String'] | null;
  readonly telephone_contains_i?: Scalars['String'] | null;
  readonly telephone_not_contains_i?: Scalars['String'] | null;
  readonly telephone_starts_with_i?: Scalars['String'] | null;
  readonly telephone_not_starts_with_i?: Scalars['String'] | null;
  readonly telephone_ends_with_i?: Scalars['String'] | null;
  readonly telephone_not_ends_with_i?: Scalars['String'] | null;
  readonly telephone_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly telephone_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly website?: Scalars['String'] | null;
  readonly website_not?: Scalars['String'] | null;
  readonly website_contains?: Scalars['String'] | null;
  readonly website_not_contains?: Scalars['String'] | null;
  readonly website_starts_with?: Scalars['String'] | null;
  readonly website_not_starts_with?: Scalars['String'] | null;
  readonly website_ends_with?: Scalars['String'] | null;
  readonly website_not_ends_with?: Scalars['String'] | null;
  readonly website_i?: Scalars['String'] | null;
  readonly website_not_i?: Scalars['String'] | null;
  readonly website_contains_i?: Scalars['String'] | null;
  readonly website_not_contains_i?: Scalars['String'] | null;
  readonly website_starts_with_i?: Scalars['String'] | null;
  readonly website_not_starts_with_i?: Scalars['String'] | null;
  readonly website_ends_with_i?: Scalars['String'] | null;
  readonly website_not_ends_with_i?: Scalars['String'] | null;
  readonly website_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly website_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_every?: CategoryWhereInput | null;
  readonly category_some?: CategoryWhereInput | null;
  readonly category_none?: CategoryWhereInput | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly missions_every?: MissionWhereInput | null;
  readonly missions_some?: MissionWhereInput | null;
  readonly missions_none?: MissionWhereInput | null;
  readonly cover?: Scalars['String'] | null;
  readonly cover_not?: Scalars['String'] | null;
  readonly cover_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly cover_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type CharityWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCharitiesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'telephone_ASC'
  | 'telephone_DESC'
  | 'website_ASC'
  | 'website_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'missions_ASC'
  | 'missions_DESC';

export type CharityUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly telephone?: Scalars['String'] | null;
  readonly website?: Scalars['String'] | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly missions?: MissionRelateToManyInput | null;
  readonly cover?: any | null;
};

export type CharitiesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CharityUpdateInput | null;
};

export type CharityCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly telephone?: Scalars['String'] | null;
  readonly website?: Scalars['String'] | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly missions?: MissionRelateToManyInput | null;
  readonly cover?: any | null;
};

export type CharitiesCreateInput = {
  readonly data?: CharityCreateInput | null;
};

export type CharityRelateToOneInput = {
  readonly create?: CharityCreateInput | null;
  readonly connect?: CharityWhereUniqueInput | null;
  readonly disconnect?: CharityWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type MissionWhereInput = {
  readonly AND?: ReadonlyArray<MissionWhereInput | null> | null;
  readonly OR?: ReadonlyArray<MissionWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date?: Scalars['String'] | null;
  readonly date_not?: Scalars['String'] | null;
  readonly date_lt?: Scalars['String'] | null;
  readonly date_lte?: Scalars['String'] | null;
  readonly date_gt?: Scalars['String'] | null;
  readonly date_gte?: Scalars['String'] | null;
  readonly date_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly date_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly duration?: Scalars['String'] | null;
  readonly duration_not?: Scalars['String'] | null;
  readonly duration_contains?: Scalars['String'] | null;
  readonly duration_not_contains?: Scalars['String'] | null;
  readonly duration_starts_with?: Scalars['String'] | null;
  readonly duration_not_starts_with?: Scalars['String'] | null;
  readonly duration_ends_with?: Scalars['String'] | null;
  readonly duration_not_ends_with?: Scalars['String'] | null;
  readonly duration_i?: Scalars['String'] | null;
  readonly duration_not_i?: Scalars['String'] | null;
  readonly duration_contains_i?: Scalars['String'] | null;
  readonly duration_not_contains_i?: Scalars['String'] | null;
  readonly duration_starts_with_i?: Scalars['String'] | null;
  readonly duration_not_starts_with_i?: Scalars['String'] | null;
  readonly duration_ends_with_i?: Scalars['String'] | null;
  readonly duration_not_ends_with_i?: Scalars['String'] | null;
  readonly duration_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly duration_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_every?: CategoryWhereInput | null;
  readonly category_some?: CategoryWhereInput | null;
  readonly category_none?: CategoryWhereInput | null;
  readonly charity?: CharityWhereInput | null;
  readonly charity_is_null?: Scalars['Boolean'] | null;
};

export type MissionWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortMissionsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'duration_ASC'
  | 'duration_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'charity_ASC'
  | 'charity_DESC';

export type MissionUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['JSON'] | null;
  readonly date?: Scalars['String'] | null;
  readonly duration?: Scalars['String'] | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly charity?: CharityRelateToOneInput | null;
};

export type MissionsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: MissionUpdateInput | null;
};

export type MissionCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['JSON'] | null;
  readonly date?: Scalars['String'] | null;
  readonly duration?: Scalars['String'] | null;
  readonly category?: CategoryRelateToManyInput | null;
  readonly charity?: CharityRelateToOneInput | null;
};

export type MissionsCreateInput = {
  readonly data?: MissionCreateInput | null;
};

export type TagRelateToManyInput = {
  readonly create?: ReadonlyArray<TagCreateInput | null> | null;
  readonly connect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PostWhereInput = {
  readonly AND?: ReadonlyArray<PostWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PostWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly publishDate_not?: Scalars['String'] | null;
  readonly publishDate_lt?: Scalars['String'] | null;
  readonly publishDate_lte?: Scalars['String'] | null;
  readonly publishDate_gt?: Scalars['String'] | null;
  readonly publishDate_gte?: Scalars['String'] | null;
  readonly publishDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publishDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: UserWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
  readonly tags_every?: TagWhereInput | null;
  readonly tags_some?: TagWhereInput | null;
  readonly tags_none?: TagWhereInput | null;
};

export type PostWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPostsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'publishDate_ASC'
  | 'publishDate_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'tags_ASC'
  | 'tags_DESC';

export type PostUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly content?: Scalars['JSON'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly tags?: TagRelateToManyInput | null;
};

export type PostsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PostUpdateInput | null;
};

export type PostCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly content?: Scalars['JSON'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly tags?: TagRelateToManyInput | null;
};

export type PostsCreateInput = {
  readonly data?: PostCreateInput | null;
};

export type TagWhereInput = {
  readonly AND?: ReadonlyArray<TagWhereInput | null> | null;
  readonly OR?: ReadonlyArray<TagWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly posts_every?: PostWhereInput | null;
  readonly posts_some?: PostWhereInput | null;
  readonly posts_none?: PostWhereInput | null;
};

export type TagWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortTagsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'posts_ASC'
  | 'posts_DESC';

export type TagUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type TagsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: TagUpdateInput | null;
};

export type TagCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly posts?: PostRelateToManyInput | null;
};

export type TagsCreateInput = {
  readonly data?: TagCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields: 'id' | 'name' | 'email' | 'password' | 'posts';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly posts?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type CategoryListTypeInfo = {
  key: 'Category';
  fields: 'id' | 'name';
  backing: {
    readonly id: string;
    readonly name?: string | null;
  };
  inputs: {
    where: CategoryWhereInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CategoryListTypeInfo,
    CategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CategoryListTypeInfo,
  CategoryListTypeInfo['fields']
>;

export type CharityListTypeInfo = {
  key: 'Charity';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'email'
    | 'telephone'
    | 'website'
    | 'category'
    | 'user'
    | 'missions'
    | 'cover';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly email?: string | null;
    readonly telephone?: string | null;
    readonly website?: string | null;
    readonly category?: string | null;
    readonly user?: string | null;
    readonly missions?: string | null;
    readonly cover?: any;
  };
  inputs: {
    where: CharityWhereInput;
    create: CharityCreateInput;
    update: CharityUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CharityWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCharitiesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CharityListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CharityListTypeInfo,
    CharityListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CharityListTypeInfo,
  CharityListTypeInfo['fields']
>;

export type MissionListTypeInfo = {
  key: 'Mission';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'date'
    | 'duration'
    | 'category'
    | 'charity';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: Record<string, any>[] | null;
    readonly date?: Date | null;
    readonly duration?: string | null;
    readonly category?: string | null;
    readonly charity?: string | null;
  };
  inputs: {
    where: MissionWhereInput;
    create: MissionCreateInput;
    update: MissionUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: MissionWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortMissionsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type MissionListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    MissionListTypeInfo,
    MissionListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  MissionListTypeInfo,
  MissionListTypeInfo['fields']
>;

export type PostListTypeInfo = {
  key: 'Post';
  fields:
    | 'id'
    | 'title'
    | 'status'
    | 'content'
    | 'publishDate'
    | 'author'
    | 'tags';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly status?: string | null;
    readonly content?: Record<string, any>[] | null;
    readonly publishDate?: Date | null;
    readonly author?: string | null;
    readonly tags?: string | null;
  };
  inputs: {
    where: PostWhereInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PostWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPostsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PostListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PostListTypeInfo,
    PostListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PostListTypeInfo,
  PostListTypeInfo['fields']
>;

export type TagListTypeInfo = {
  key: 'Tag';
  fields: 'id' | 'name' | 'posts';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly posts?: string | null;
  };
  inputs: {
    where: TagWhereInput;
    create: TagCreateInput;
    update: TagUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: TagWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortTagsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type TagListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    TagListTypeInfo,
    TagListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  TagListTypeInfo,
  TagListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Category: CategoryListTypeInfo;
  readonly Charity: CharityListTypeInfo;
  readonly Mission: MissionListTypeInfo;
  readonly Post: PostListTypeInfo;
  readonly Tag: TagListTypeInfo;
};
