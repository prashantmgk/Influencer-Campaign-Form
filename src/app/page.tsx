"use client";

import { useQuery } from '@tanstack/react-query';
import InfluencerForm from './components/InfluencerForm';
import { InfluencerCampaignForm, getCampaignForm } from '../../lib/api';
import Loader from './components/Loader';
import Error500 from './components/Error500';

export default function Home() {
  const { data, error, isLoading } = useQuery<InfluencerCampaignForm>({
    queryKey: ['campaignForm'],
    queryFn: () => getCampaignForm('campaignForm'),
  });

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <Error500 />
  }

  return (
    <InfluencerForm campaignForm={data!} />
  );
}