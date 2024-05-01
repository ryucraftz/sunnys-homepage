import { Fragment } from 'react';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection, ProjectSectionContent, ProjectImage, ProjectSectionHeading } from 'layouts/Project';
import styles from './SmartSparrow.module.css';
import ytthumb1 from 'assets/ramen.png';
import ytthumb2 from 'assets/sushi.png';
import ytthumb3 from 'assets/samurai.png';
import backgroundSpr from 'assets/spr-background.png';
import backgroundSprLarge from 'assets/spr-background.png';
import backgroundSprPlaceholder from 'assets/spr-background.jpg';

const title = 'Learn about Japanese Culture';
const description = 'Japan is rich in cultural treasures beyond just samurai and cuisine. Here are some other facets of Japanese culture you might find fascinating.';
const roles = [
  'Ramen',
  'Japanese Cuisine',
  'Samurai',
  'Origami',
];

export const SmartSparrow = () => {
  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground opacity={0.8} src={backgroundSpr} srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`} placeholder={backgroundSprPlaceholder} />
        <ProjectHeader title={title} description={description} url="" roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div className={styles.contentWrapper}>
              <div className={styles.textContainer}>
                <ProjectSectionHeading>Japanese Culture</ProjectSectionHeading>
                <div className={styles.youtubeThumbnails}>
                  <div className={styles.thumbnailContainer}>
                    <Link href="">
                      <ProjectImage src={ytthumb1} placeholder={ytthumb1} alt="YouTube Thumbnail 1" width={160} height={90} className={styles.thumbnail} />
                    </Link>
                    <span>
                      Ramen is not just a dish in Japan; it&apos;s a cultural icon, a beloved comfort food that has captivated taste buds around the world. Originating from China, ramen was introduced to Japan in the late 19th century and has since evolved into a culinary phenomenon uniquely Japanese.
                    </span>
                  </div>
                  <div className={styles.thumbnailContainer}>
                    <Link href="">
                      <ProjectImage src={ytthumb2} placeholder={ytthumb2} alt="YouTube Thumbnail 2" width={160} height={90} className={styles.thumbnail} />
                    </Link>
                    <span>
                      Japanese cuisine is celebrated worldwide for its exquisite flavors, meticulous preparation, and artistic presentation. From sushi and sashimi to ramen and tempura, Japan offers a culinary journey like no other. Each dish reflects a harmonious blend of fresh ingredients, seasonal flavors, and culinary craftsmanship. Traditional Japanese dining emphasizes the importance of balance, simplicity, and appreciation for the natural beauty of food.
                    </span>
                  </div>
                  <div className={styles.thumbnailContainer}>
                    <Link href="">
                      <ProjectImage src={ytthumb3} placeholder={ytthumb3} alt="YouTube Thumbnail 3" width={160} height={90} className={styles.thumbnail} />
                    </Link>
                    <span>
                      The samurai, legendary warriors of Japan, epitomize the country&apos;s spirit of honor, loyalty, and martial prowess. Emerging during the feudal era, samurai served as protectors of their lords and masters, adhering to a strict code of conduct known as Bushido. Renowned for their swordsmanship, discipline, and unwavering dedication, samurai have left an indelible mark on Japanese history and culture, inspiring countless tales of valor and heroism.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
