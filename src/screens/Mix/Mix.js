import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import selectMix from '../../selectors/selectMix';
import selectMixFromQuery from '../../selectors/selectMixFromQuery';
import fetchMix from '../../actions/fetchMix';
import Aside from '../../components/Aside';
import MixDetails from '../../components/MixDetails';
import MixBody from '../../components/MixBody';
import styles from './Mix.module.css';

const Mix = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const cache = useSelector(selectMixFromQuery(slug));
  const mix = useSelector(selectMix(slug));

  const {
    id,
    content,
    description,
    title,
    artists,
    genres,
    tags,
    published,
    poster,
    thumbnail,
    plays,
    downloads,
    duration,
    quality,
    fileSize,
    comments
  } = cache.id ? cache : mix.id ? mix : {};

  useEffect(() => {
    if (!id) {
      const action = fetchMix(slug);
      dispatch(action);
    }
  }, [id, slug, dispatch]);

  return (
    <div className={styles.root}>
      <Aside>
        {!id
          ? <MixDetails empty />
          : (
            <MixDetails
              id={id}
              slug={slug}
              thumbnail={thumbnail}
              poster={poster}
              published={published}
              artists={artists}
              title={title}
              genres={genres}
              tags={tags}
              duration={duration}
              description={description}
              plays={plays}
              downloads={downloads}
              quality={quality}
              fileSize={fileSize}
            />
          )}
      </Aside>
      <div className={styles.body}>
        <MixBody content={content} />
        {!id
          ? <div>Loading&hellip;</div>
          : (
            <div className={styles.comments}>
              <div>Add comment</div>
              {comments.map(({ authorName, content }, index) => (
                <div key={`comment-${index}`}>
                  <div>{authorName}</div>
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              ))}
            </div>)}
      </div>
    </div>
  );
};

export default Mix;