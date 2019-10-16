import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import getIt from 'get-it'
import jsonResponse from 'get-it/lib/middleware/jsonResponse'
import promise from 'get-it/lib/middleware/promise'
import Button from 'part:@sanity/components/buttons/default'

import styles from './invalidator.css'

const request = getIt([promise(), jsonResponse()])
const base_url = 'https://sesong.info'

class InvalidateCache extends React.Component {
  state = {
    invalidating: false,
    success: null,
    successMessage: null,
    error: null,
    errorMessage: null
  }
  invalidateCache = () => {
    this.setState({
      invalidating: true
    })

    request({
      url: `${base_url}/invalidate`,
      body: '',
      method: 'POST'
    })
      .then(response => {
        this.setState({
          invalidating: false,
          success: true,
          successMessage: response.body
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          error,
          invalidating: false,
          success: false,
          successMessage: null
        })
      })
  }

  render() {
    const { error, invalidating, success, successMessage } = this.state

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Publish</h2>
        </header>
        <div className={styles.containerWithPadding}>
          <p>Publish your site by invalidating the cloudfront cache.</p>
          {invalidating && (
            <Fragment>
              <progress /> invalidating…
            </Fragment>
          )}
          {success && (
            <Fragment>
              <h4>{ successMessage }</h4>
              <p>Your should be public with new content!</p>
              <p><a href={base_url}>{base_url}</a></p>
            </Fragment>
          )}
          {error && (
            <Fragment>
              <h4>Something went wrong!</h4>
              <p>
                { error.message }
              </p>
            </Fragment>
          )}
        </div>
        <div className={styles.footer}>
            <Button bleed color="primary" kind="simple" onClick={this.invalidateCache}>
              {error ? 'Try again' : 'Invalidate cache'}
            </Button>
          </div>
      </div>
    )
  }
}

export default {
  name: 'cyberspace-invalidate-cache',
  component: InvalidateCache
}