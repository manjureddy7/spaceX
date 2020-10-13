import React from 'react';
import { render, cleanup, screen } from '@testing-library/react'

import Mission from '../components/RightPane/Mission';

afterEach(cleanup);

const missionDetails = {
    image: '',
    missionName: '',
    missionIds: '',
    launchYear: '',
    successfulLaunch: '',
    successfulLanding: ''
}

describe('Mission Component', () => {
    test('renders Mission component', () => {
      render(<Mission missionDetails={missionDetails} />);
      expect(screen.getByText('Mission ids:')).toBeInTheDocument();
      expect(screen.getByText('Launch Year:')).toBeInTheDocument();
      expect(screen.getByText('Successful Launch:')).toBeInTheDocument();
      expect(screen.getByText('Successful Landing:')).toBeInTheDocument();
      //screen.debug();
    });
    test('Should match snapshot', () => {
        const { asFragment } = render(<Mission missionDetails={missionDetails} />)
        expect(asFragment(<Mission missionDetails={missionDetails} />)).toMatchSnapshot()
    })
});