import * as React from 'react';

import { usePopularArticles } from '../../store';
import { Article, startLoadingArticles } from '../../store/reducers';
import { Currency } from '../currency';
import { ArticleValidator } from './validator';
import { Flex, Input, CancelButton, Button } from '../../bricks';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useSettings } from '../../store';


interface Props {
  userId: string;
  onSelect(article: Article): void;
  onCancel(): void;
}

const ARTICLE_BUBBLE_LIMIT = 10;
export const ArticleSelectionBubbles = (props: Props) => {
  const items = usePopularArticles();
  const dispatch = useDispatch();
  const intl = useIntl();
  const [query, setQuery] = React.useState('');
  const settings = useSettings();

  React.useEffect(() => {
    startLoadingArticles(dispatch, true);
  }, [dispatch]);

  return (
    <div>
      <Flex>
        <Input
          placeholder={intl.formatMessage({ id: 'BUY_ARTICLE_PLACEHOLDER' })}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <CancelButton margin="0 0 0 1rem" onClick={props.onCancel} />
      </Flex>
      <div style={{ width: '80vw', position: 'relative', left: 'calc(-40vw + 50%)' }}>
        <Flex margin="2rem 0 0 0" flexWrap="wrap" justifyContent="center">
          {items
            .filter(
              (item) =>
                !query || item.name.toLowerCase().includes(query.toLowerCase())
            )
            .filter(
              (item) => {
                return !settings.article.tagFilter || item.tags.some((tag) => tag.tag === settings.article.tagFilter)
              }
            )
            .slice(0, ARTICLE_BUBBLE_LIMIT)
            .map((item) => (
              <ArticleValidator
                key={item.name}
                userId={props.userId}
                value={item.amount}
                render={(isValid) => (
                  <Button
                    primary
                    disabled={!isValid}
                    style={{ fontSize: '140%' }}
                    onClick={() => {
                      if (isValid) {
                        props.onSelect(item);
                      }
                    }}
                    padding="1rem"
                    margin="0.3rem"
                  >
                    {item.name} | <Currency hidePlusSign value={item.amount} />
                  </Button>
                )}
              />
            ))}
        </Flex>
      </div>
    </div >
  );
};
