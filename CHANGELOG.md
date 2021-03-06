# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [v0.3.0]

Setup styled-components and react-native-elements

### Added

- as a guide used https://react-native-training.github.io/react-native-elements/docs/listitem.html
- as a guide used https://www.styled-components.com/docs/basics#react-native

## [v0.2.0]

Setup Apollo GraphQL client with cache persisting

### Added

- setup Apollo GraphQL client: https://www.apollographql.com/docs/react/
  - a local development address is given for the GraphQL server uri
- implemented cache persisting with https://github.com/apollographql/apollo-cache-persist
  to AsyncStorage
- made first queries
  - on HomeScreen querying data from locally connected main server
  - on IndexScreen querying data from the client store
  - for `fetchPolicy`s see https://www.apollographql.com/docs/react/api/react-apollo#graphql-config-options-fetchPolicy

## [v0.1.0]

Initial React Native app setup with Expo and React Navigation

### Added

- setup initial app with Expo: https://github.com/react-community/create-react-native-app
- setup React Navigation: https://reactnavigation.org/docs/en/getting-started.html
  - implement drawer and nested stack navigation
- setup Jest framework for tests
- setup linter and Code Climate
  - with configs according to this project

## [v0.0.1]

Initial repository commit
