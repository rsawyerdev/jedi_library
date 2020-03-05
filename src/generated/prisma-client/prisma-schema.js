module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthor {
  count: Int!
}

type AggregateBook {
  count: Int!
}

type AggregateBookStatus {
  count: Int!
}

type AggregateEpochTime {
  count: Int!
}

type AggregateEra {
  count: Int!
}

type AggregateSeries {
  count: Int!
}

type Author {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type AuthorConnection {
  pageInfo: PageInfo!
  edges: [AuthorEdge]!
  aggregate: AggregateAuthor!
}

input AuthorCreateInput {
  id: ID
  name: String!
}

type AuthorEdge {
  node: Author!
  cursor: String!
}

enum AuthorOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  name_ASC
  name_DESC
}

type AuthorPreviousValues {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type AuthorSubscriptionPayload {
  mutation: MutationType!
  node: Author
  updatedFields: [String!]
  previousValues: AuthorPreviousValues
}

input AuthorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthorWhereInput
  AND: [AuthorSubscriptionWhereInput!]
  OR: [AuthorSubscriptionWhereInput!]
  NOT: [AuthorSubscriptionWhereInput!]
}

input AuthorUpdateInput {
  name: String
}

input AuthorUpdateManyMutationInput {
  name: String
}

input AuthorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AuthorWhereInput!]
  OR: [AuthorWhereInput!]
  NOT: [AuthorWhereInput!]
}

input AuthorWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  dateAdded: DateTime!
  title: String!
  era: String!
  author: ID!
  releaseDate: String!
  imageId: String!
  summary: String!
  pages: Int!
  isbn: Int!
  timeLine: String!
  series: String
  bookStatus: ID!
  epochTime: ID!
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  id: ID
  title: String!
  era: String!
  author: ID!
  releaseDate: String!
  imageId: String!
  summary: String!
  pages: Int!
  isbn: Int!
  timeLine: String!
  series: String
  bookStatus: ID!
  epochTime: ID!
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  title_ASC
  title_DESC
  era_ASC
  era_DESC
  author_ASC
  author_DESC
  releaseDate_ASC
  releaseDate_DESC
  imageId_ASC
  imageId_DESC
  summary_ASC
  summary_DESC
  pages_ASC
  pages_DESC
  isbn_ASC
  isbn_DESC
  timeLine_ASC
  timeLine_DESC
  series_ASC
  series_DESC
  bookStatus_ASC
  bookStatus_DESC
  epochTime_ASC
  epochTime_DESC
}

type BookPreviousValues {
  id: ID!
  dateAdded: DateTime!
  title: String!
  era: String!
  author: ID!
  releaseDate: String!
  imageId: String!
  summary: String!
  pages: Int!
  isbn: Int!
  timeLine: String!
  series: String
  bookStatus: ID!
  epochTime: ID!
}

type BookStatus {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type BookStatusConnection {
  pageInfo: PageInfo!
  edges: [BookStatusEdge]!
  aggregate: AggregateBookStatus!
}

input BookStatusCreateInput {
  id: ID
  name: String!
}

type BookStatusEdge {
  node: BookStatus!
  cursor: String!
}

enum BookStatusOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  name_ASC
  name_DESC
}

type BookStatusPreviousValues {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type BookStatusSubscriptionPayload {
  mutation: MutationType!
  node: BookStatus
  updatedFields: [String!]
  previousValues: BookStatusPreviousValues
}

input BookStatusSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookStatusWhereInput
  AND: [BookStatusSubscriptionWhereInput!]
  OR: [BookStatusSubscriptionWhereInput!]
  NOT: [BookStatusSubscriptionWhereInput!]
}

input BookStatusUpdateInput {
  name: String
}

input BookStatusUpdateManyMutationInput {
  name: String
}

input BookStatusWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [BookStatusWhereInput!]
  OR: [BookStatusWhereInput!]
  NOT: [BookStatusWhereInput!]
}

input BookStatusWhereUniqueInput {
  id: ID
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
  title: String
  era: String
  author: ID
  releaseDate: String
  imageId: String
  summary: String
  pages: Int
  isbn: Int
  timeLine: String
  series: String
  bookStatus: ID
  epochTime: ID
}

input BookUpdateManyMutationInput {
  title: String
  era: String
  author: ID
  releaseDate: String
  imageId: String
  summary: String
  pages: Int
  isbn: Int
  timeLine: String
  series: String
  bookStatus: ID
  epochTime: ID
}

input BookWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  era: String
  era_not: String
  era_in: [String!]
  era_not_in: [String!]
  era_lt: String
  era_lte: String
  era_gt: String
  era_gte: String
  era_contains: String
  era_not_contains: String
  era_starts_with: String
  era_not_starts_with: String
  era_ends_with: String
  era_not_ends_with: String
  author: ID
  author_not: ID
  author_in: [ID!]
  author_not_in: [ID!]
  author_lt: ID
  author_lte: ID
  author_gt: ID
  author_gte: ID
  author_contains: ID
  author_not_contains: ID
  author_starts_with: ID
  author_not_starts_with: ID
  author_ends_with: ID
  author_not_ends_with: ID
  releaseDate: String
  releaseDate_not: String
  releaseDate_in: [String!]
  releaseDate_not_in: [String!]
  releaseDate_lt: String
  releaseDate_lte: String
  releaseDate_gt: String
  releaseDate_gte: String
  releaseDate_contains: String
  releaseDate_not_contains: String
  releaseDate_starts_with: String
  releaseDate_not_starts_with: String
  releaseDate_ends_with: String
  releaseDate_not_ends_with: String
  imageId: String
  imageId_not: String
  imageId_in: [String!]
  imageId_not_in: [String!]
  imageId_lt: String
  imageId_lte: String
  imageId_gt: String
  imageId_gte: String
  imageId_contains: String
  imageId_not_contains: String
  imageId_starts_with: String
  imageId_not_starts_with: String
  imageId_ends_with: String
  imageId_not_ends_with: String
  summary: String
  summary_not: String
  summary_in: [String!]
  summary_not_in: [String!]
  summary_lt: String
  summary_lte: String
  summary_gt: String
  summary_gte: String
  summary_contains: String
  summary_not_contains: String
  summary_starts_with: String
  summary_not_starts_with: String
  summary_ends_with: String
  summary_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  isbn: Int
  isbn_not: Int
  isbn_in: [Int!]
  isbn_not_in: [Int!]
  isbn_lt: Int
  isbn_lte: Int
  isbn_gt: Int
  isbn_gte: Int
  timeLine: String
  timeLine_not: String
  timeLine_in: [String!]
  timeLine_not_in: [String!]
  timeLine_lt: String
  timeLine_lte: String
  timeLine_gt: String
  timeLine_gte: String
  timeLine_contains: String
  timeLine_not_contains: String
  timeLine_starts_with: String
  timeLine_not_starts_with: String
  timeLine_ends_with: String
  timeLine_not_ends_with: String
  series: String
  series_not: String
  series_in: [String!]
  series_not_in: [String!]
  series_lt: String
  series_lte: String
  series_gt: String
  series_gte: String
  series_contains: String
  series_not_contains: String
  series_starts_with: String
  series_not_starts_with: String
  series_ends_with: String
  series_not_ends_with: String
  bookStatus: ID
  bookStatus_not: ID
  bookStatus_in: [ID!]
  bookStatus_not_in: [ID!]
  bookStatus_lt: ID
  bookStatus_lte: ID
  bookStatus_gt: ID
  bookStatus_gte: ID
  bookStatus_contains: ID
  bookStatus_not_contains: ID
  bookStatus_starts_with: ID
  bookStatus_not_starts_with: ID
  bookStatus_ends_with: ID
  bookStatus_not_ends_with: ID
  epochTime: ID
  epochTime_not: ID
  epochTime_in: [ID!]
  epochTime_not_in: [ID!]
  epochTime_lt: ID
  epochTime_lte: ID
  epochTime_gt: ID
  epochTime_gte: ID
  epochTime_contains: ID
  epochTime_not_contains: ID
  epochTime_starts_with: ID
  epochTime_not_starts_with: ID
  epochTime_ends_with: ID
  epochTime_not_ends_with: ID
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar DateTime

type EpochTime {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type EpochTimeConnection {
  pageInfo: PageInfo!
  edges: [EpochTimeEdge]!
  aggregate: AggregateEpochTime!
}

input EpochTimeCreateInput {
  id: ID
  name: String!
}

type EpochTimeEdge {
  node: EpochTime!
  cursor: String!
}

enum EpochTimeOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  name_ASC
  name_DESC
}

type EpochTimePreviousValues {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type EpochTimeSubscriptionPayload {
  mutation: MutationType!
  node: EpochTime
  updatedFields: [String!]
  previousValues: EpochTimePreviousValues
}

input EpochTimeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EpochTimeWhereInput
  AND: [EpochTimeSubscriptionWhereInput!]
  OR: [EpochTimeSubscriptionWhereInput!]
  NOT: [EpochTimeSubscriptionWhereInput!]
}

input EpochTimeUpdateInput {
  name: String
}

input EpochTimeUpdateManyMutationInput {
  name: String
}

input EpochTimeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [EpochTimeWhereInput!]
  OR: [EpochTimeWhereInput!]
  NOT: [EpochTimeWhereInput!]
}

input EpochTimeWhereUniqueInput {
  id: ID
}

type Era {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type EraConnection {
  pageInfo: PageInfo!
  edges: [EraEdge]!
  aggregate: AggregateEra!
}

input EraCreateInput {
  id: ID
  name: String!
}

type EraEdge {
  node: Era!
  cursor: String!
}

enum EraOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  name_ASC
  name_DESC
}

type EraPreviousValues {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type EraSubscriptionPayload {
  mutation: MutationType!
  node: Era
  updatedFields: [String!]
  previousValues: EraPreviousValues
}

input EraSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EraWhereInput
  AND: [EraSubscriptionWhereInput!]
  OR: [EraSubscriptionWhereInput!]
  NOT: [EraSubscriptionWhereInput!]
}

input EraUpdateInput {
  name: String
}

input EraUpdateManyMutationInput {
  name: String
}

input EraWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [EraWhereInput!]
  OR: [EraWhereInput!]
  NOT: [EraWhereInput!]
}

input EraWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthor(data: AuthorCreateInput!): Author!
  updateAuthor(data: AuthorUpdateInput!, where: AuthorWhereUniqueInput!): Author
  updateManyAuthors(data: AuthorUpdateManyMutationInput!, where: AuthorWhereInput): BatchPayload!
  upsertAuthor(where: AuthorWhereUniqueInput!, create: AuthorCreateInput!, update: AuthorUpdateInput!): Author!
  deleteAuthor(where: AuthorWhereUniqueInput!): Author
  deleteManyAuthors(where: AuthorWhereInput): BatchPayload!
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createBookStatus(data: BookStatusCreateInput!): BookStatus!
  updateBookStatus(data: BookStatusUpdateInput!, where: BookStatusWhereUniqueInput!): BookStatus
  updateManyBookStatuses(data: BookStatusUpdateManyMutationInput!, where: BookStatusWhereInput): BatchPayload!
  upsertBookStatus(where: BookStatusWhereUniqueInput!, create: BookStatusCreateInput!, update: BookStatusUpdateInput!): BookStatus!
  deleteBookStatus(where: BookStatusWhereUniqueInput!): BookStatus
  deleteManyBookStatuses(where: BookStatusWhereInput): BatchPayload!
  createEpochTime(data: EpochTimeCreateInput!): EpochTime!
  updateEpochTime(data: EpochTimeUpdateInput!, where: EpochTimeWhereUniqueInput!): EpochTime
  updateManyEpochTimes(data: EpochTimeUpdateManyMutationInput!, where: EpochTimeWhereInput): BatchPayload!
  upsertEpochTime(where: EpochTimeWhereUniqueInput!, create: EpochTimeCreateInput!, update: EpochTimeUpdateInput!): EpochTime!
  deleteEpochTime(where: EpochTimeWhereUniqueInput!): EpochTime
  deleteManyEpochTimes(where: EpochTimeWhereInput): BatchPayload!
  createEra(data: EraCreateInput!): Era!
  updateEra(data: EraUpdateInput!, where: EraWhereUniqueInput!): Era
  updateManyEras(data: EraUpdateManyMutationInput!, where: EraWhereInput): BatchPayload!
  upsertEra(where: EraWhereUniqueInput!, create: EraCreateInput!, update: EraUpdateInput!): Era!
  deleteEra(where: EraWhereUniqueInput!): Era
  deleteManyEras(where: EraWhereInput): BatchPayload!
  createSeries(data: SeriesCreateInput!): Series!
  updateSeries(data: SeriesUpdateInput!, where: SeriesWhereUniqueInput!): Series
  updateManySerieses(data: SeriesUpdateManyMutationInput!, where: SeriesWhereInput): BatchPayload!
  upsertSeries(where: SeriesWhereUniqueInput!, create: SeriesCreateInput!, update: SeriesUpdateInput!): Series!
  deleteSeries(where: SeriesWhereUniqueInput!): Series
  deleteManySerieses(where: SeriesWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  author(where: AuthorWhereUniqueInput!): Author
  authors(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Author]!
  authorsConnection(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthorConnection!
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  bookStatus(where: BookStatusWhereUniqueInput!): BookStatus
  bookStatuses(where: BookStatusWhereInput, orderBy: BookStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BookStatus]!
  bookStatusesConnection(where: BookStatusWhereInput, orderBy: BookStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookStatusConnection!
  epochTime(where: EpochTimeWhereUniqueInput!): EpochTime
  epochTimes(where: EpochTimeWhereInput, orderBy: EpochTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EpochTime]!
  epochTimesConnection(where: EpochTimeWhereInput, orderBy: EpochTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EpochTimeConnection!
  era(where: EraWhereUniqueInput!): Era
  eras(where: EraWhereInput, orderBy: EraOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Era]!
  erasConnection(where: EraWhereInput, orderBy: EraOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EraConnection!
  series(where: SeriesWhereUniqueInput!): Series
  serieses(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Series]!
  seriesesConnection(where: SeriesWhereInput, orderBy: SeriesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeriesConnection!
  node(id: ID!): Node
}

type Series {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type SeriesConnection {
  pageInfo: PageInfo!
  edges: [SeriesEdge]!
  aggregate: AggregateSeries!
}

input SeriesCreateInput {
  id: ID
  name: String!
}

type SeriesEdge {
  node: Series!
  cursor: String!
}

enum SeriesOrderByInput {
  id_ASC
  id_DESC
  dateAdded_ASC
  dateAdded_DESC
  name_ASC
  name_DESC
}

type SeriesPreviousValues {
  id: ID!
  dateAdded: DateTime!
  name: String!
}

type SeriesSubscriptionPayload {
  mutation: MutationType!
  node: Series
  updatedFields: [String!]
  previousValues: SeriesPreviousValues
}

input SeriesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeriesWhereInput
  AND: [SeriesSubscriptionWhereInput!]
  OR: [SeriesSubscriptionWhereInput!]
  NOT: [SeriesSubscriptionWhereInput!]
}

input SeriesUpdateInput {
  name: String
}

input SeriesUpdateManyMutationInput {
  name: String
}

input SeriesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  dateAdded: DateTime
  dateAdded_not: DateTime
  dateAdded_in: [DateTime!]
  dateAdded_not_in: [DateTime!]
  dateAdded_lt: DateTime
  dateAdded_lte: DateTime
  dateAdded_gt: DateTime
  dateAdded_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SeriesWhereInput!]
  OR: [SeriesWhereInput!]
  NOT: [SeriesWhereInput!]
}

input SeriesWhereUniqueInput {
  id: ID
}

type Subscription {
  author(where: AuthorSubscriptionWhereInput): AuthorSubscriptionPayload
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  bookStatus(where: BookStatusSubscriptionWhereInput): BookStatusSubscriptionPayload
  epochTime(where: EpochTimeSubscriptionWhereInput): EpochTimeSubscriptionPayload
  era(where: EraSubscriptionWhereInput): EraSubscriptionPayload
  series(where: SeriesSubscriptionWhereInput): SeriesSubscriptionPayload
}
`
      }
    