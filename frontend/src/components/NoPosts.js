import React from 'react';
import { Button } from 'antd';

const NoPosts = () => (
  <div style={{ textAlign: 'center', padding: 80 }}>
    <div style={{ marginBottom: 50, fontSize: 24 }}>
      There's nothing here!
    </div>
    <Button type="dashed" size="large" icon="plus-circle-o">
      Add a Post
    </Button>
  </div>
)

export default NoPosts;
