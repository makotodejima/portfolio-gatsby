import React, { useState } from 'react';
import styled from 'styled-components';
import Email from '../components/Email';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';
import { PageTitle, ContactWrapper } from '../components/StyledComps';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactWrapper>
        <Email />
        <SocialLinks />
      </ContactWrapper>
    </Layout>
  );
};

export default ContactPage;

const Intro = styled.div`
  line-height: 2;
  margin-bottom: 3rem;
  p {
    margin: 1rem 0;
  }
`;
