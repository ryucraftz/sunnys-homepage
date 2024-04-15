import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import ytthumb1 from 'assets/maxresdefault.jpg';
import ytthumb2 from 'assets/maxresdefault (1).jpg';
import ytthumb3 from 'assets/maxresdefault (2).jpg';
import ytthumb4 from 'assets/maxresdefault (3).jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkLarge from 'assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Learn about k_pop Culture';
const description =
'Its all about the K-Culture, all the updates you need to know regarding K-pop and K-drama and also K-News! So if you are interested in the K-Tea you can subscribe to the channel!.';
const roles = [
  'K-Pop',
  'K-Drama',
  'K-News',
  'K-Tea',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
  <ProjectSectionHeading>YouTube Videos</ProjectSectionHeading>
  <ProjectSectionContent className={styles.youtubeThumbnails}
  ></ProjectSectionContent>
  <div className={styles.thumbnailContainer} style={{ marginBottom: '20px' }}> {/* Added inline style with margin-bottom */}
    <Link href="https://www.youtube.com/watch?v=G0FyZ3t-1DM">
      <ProjectImage
        src={ytthumb1}
        placeholder={ytthumb1} // Changed source to ytthumb1
        alt="YouTube Thumbnail 1"
        width={160}
        height={90}
        className={styles.thumbnail}
      />
    </Link>
    <ProjectSectionText>K-Pop Ongoing Global Online Auditions for April 2024</ProjectSectionText>
  </div>
  <div className={styles.thumbnailContainer} style={{ marginBottom: '20px' }}> {/* Added inline style with margin-bottom */}
    <Link href="https://www.youtube.com/watch?v=dezMtk04L6M">
      <ProjectImage
        src={ytthumb2}
        placeholder={ytthumb2} // Changed source to ytthumb1
        alt="YouTube Thumbnail 2"
        width={160}
        height={90}
        className={styles.thumbnail}
      />
    </Link>
    <ProjectSectionText>Short Stories Topics For VISIT KOREA 2024</ProjectSectionText>
  </div>
  <div className={styles.thumbnailContainer} style={{ marginBottom: '20px' }}> {/* Added inline style with margin-bottom */}
    <Link href="https://www.youtube.com/watch?v=G0FyZ3t-1DM">
      <ProjectImage
        src={ytthumb3}
        placeholder={ytthumb3} // Changed source to ytthumb1
        alt="YouTube Thumbnail 1"
        width={160}
        height={90}
        className={styles.thumbnail}
      />
    </Link>
    <ProjectSectionText>Short Stories Topics For VISIT KOREA 2024</ProjectSectionText>
  </div>
  <div className={styles.thumbnailContainer} style={{ marginBottom: '20px' }}> {/* Added inline style with margin-bottom */}
    <Link href="https://www.youtube.com/watch?v=G0FyZ3t-1DM">
      <ProjectImage
        src={ytthumb4}
        placeholder={ytthumb4} // Changed source to ytthumb1
        alt="YouTube Thumbnail 1"
        width={160}
        height={90}
        className={styles.thumbnail}
      />
    </Link>
    <ProjectSectionText>2024 Cheonnan Kpop World Audition Guidelines</ProjectSectionText>
  </div>
</ProjectSection>
            </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
