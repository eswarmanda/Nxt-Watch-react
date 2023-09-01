import {CustomContainer, Heading, Text, NotFoundImg} from './styledComponent'

import NavigationMenu from '../NavigationMenu'
import Header from '../Header'

const NotFound = () => (
  <CustomContainer d="flex" fd="column" h="100vh" w="100%">
    <Header />
    <CustomContainer d="flex">
      <NavigationMenu />
      <CustomContainer
        d="flex"
        fd="column"
        ai="center"
        jc="center"
        h="100vh"
        bc="#c9c9c9"
      >
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <Heading>Page Not Found</Heading>
        <Text>We are sorry, the page you requested could not be found.</Text>
      </CustomContainer>
    </CustomContainer>
  </CustomContainer>
)
export default NotFound
