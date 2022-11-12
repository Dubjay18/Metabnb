import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Sponsors from "../components/Sponsors";

function Main() {
  return (
    <>
      <main className='min-h-screen overflow-x-hidden'>
        <Layout>
          <Hero />
          <Sponsors />
          <Grid />
          <Section />
        </Layout>
      </main>
    </>
  );
}

export default Main;
